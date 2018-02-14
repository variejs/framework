import Vue from "vue";
import Route from "./Route";
import VueRouter from "vue-router";
import { injectable } from "inversify";
import Middleware from "@routes/middleware";
import RouterInterface from "./RouterInterface";
import setByDot from "./../utilities/setByDot";
import getByDot from "./../utilities/getByDot";
import * as camelCase from "camelcase";
import { isObject } from "util";

@injectable()
export default class VueRouterService implements RouterInterface {
  public routes = [];
  public router: VueRouter;
  protected groupInfo = null;
  protected groupMeta = [];
  public loaded = false;
  public oldMeta = {};
  public groups = [];
  constructor() {
    Vue.use(VueRouter);
    this._resetGroup();
  }

  public getRouter() {
    return this.router;
  }

  private currentGroupLevel = 0;

  private buildRouter() {
    return new Promise(resolve => {
      this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
      resolve(this.routes);
    }).then(routes => {
      console.info(routes)
      $config.set("router.routes", routes);
      this.router = new VueRouter($config.get("router"));
      this.registerMiddleware();
    });
  }

  public route(path, component: string | {}, props = {}): Route {
    let route = new Route(
      path,
      component,
      props
    );

    if(this.currentGroupLevel > -1) {
      this.groups[this.currentGroupLevel].children.push(route)
      return route;
    }

    this.routes.push(route);

    return route;
  }

  public middleware(middleware) {
    this.groupInfo.middleware = this.groupInfo.middleware.concat(middleware);
    return this;
  }

  public redirect(path, redirect) {
    this.routes.push({
      path: path,
      redirect: redirect
    });
  }

  public group(path, routes) {
    this.groupInfo.path = path;
    let groupInfo = JSON.parse(JSON.stringify(this.groupInfo));
    this.groups.push(groupInfo);
    this.currentGroupLevel++;
    routes();
    this._resetGroup();

    return this;
  }

  public template(template) {
    this.groupInfo.component = require(`@views/${template}`);
    return this;
  }

  public prefix(prefix) {
    this.groupInfo.path = prefix;
    return this;
  }

  private requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }

  private registerMiddleware() {
    let middleware = Middleware;

    for (let middlewareName in middleware) {
      let middlewareFunction = middleware[middlewareName];
      this.router.beforeResolve((to, from, next) => {
        if (
          to.meta.middleware &&
          to.meta.middleware.indexOf(middlewareName) > -1
        ) {
          return middlewareFunction(to, from, next);
        }
        next();
      });
    }
  }

  private _resetGroup() {
    this.currentGroupLevel--;
    this.groupInfo = {
      meta : {
        middleware: [],
      },
      component : null,
      children : [],
    };

    if(this.currentGroupLevel === -1 && this.groups.length) {
      for(let groupIndex = this.groups.length - 1; groupIndex > 0; groupIndex--) {
          this.groups[groupIndex - 1].children = [this.groups[groupIndex]]
      }
      this.routes.push(this.groups[0])
    }
  }
}
