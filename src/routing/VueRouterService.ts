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
      let tempRoutes = [];

      let paths = {};

      routes.forEach(route => {
        if (route.groupLevel !== null && route.groupLevel >= 0) {
          let group = this.groups[route.groupLevel];
          let prefix = group.prefix;

          let path = prefix.replace(/(\/)(?=\/*\1)/g, "");

          let name = `${prefix}${route.path}`;
          route.name = camelCase(name.replace(/\//g, " "));

          let dotPath =
            "/" +
            prefix
              .replace(/(\/)(?=\/*\1)/g, "")
              .replace(/\//g, ".tempRoutes.")
              .replace(/\.tempRoutes\.$/, "");

          if (!getByDot(paths, dotPath)) {
            setByDot(paths, dotPath, {
              path,
              tempRoutes: [],
              component: require(`@views/${group.template.template}`)
            });
          }
          getByDot(paths, dotPath).tempRoutes.push(route);
        } else {
          route.name = camelCase(route.path.replace(/\//g, " "));

          tempRoutes.push(route);
        }
      });

      for (let path in paths) {
        let data = paths[path];
        tempRoutes.push({
          path: path.replace(/(\/)(?=\/*\1)/g, ""),
          children: this._getPaths(data.routes, data.tempRoutes),
          component: data.component
        });
      }

      $config.set("router.routes", tempRoutes);
      this.router = new VueRouter($config.get("router"));
      this.registerMiddleware();
    });
  }

  private _getPaths(routes = [], tempRoutes: Object) {
    for (let tempRoute in tempRoutes) {
      tempRoute = tempRoutes[tempRoute];
      tempRoute.path = tempRoute.path
        .substring(tempRoute.path.lastIndexOf("/"))
        .replace(/^\//, "");
      if (tempRoute.tempRoutes) {
        tempRoute.children = this._getPaths([], tempRoute.tempRoutes);
        delete tempRoute.tempRoutes;
      }
      routes.push(tempRoute);
    }
    return routes;
  }

  public route(path, component: string | {}, props = {}): Route {
    let route = new Route(
      path,
      component,
      this.currentGroupLevel >= 0 ? this.currentGroupLevel : null,
      props
    );
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
    this.groupInfo.prefix = this.groupInfo.prefix
      ? `${this.groupInfo.prefix}/${path}`
      : path;
    let groupInfo = Object.assign({}, this.groupInfo);
    this.groups.push(groupInfo);
    this.currentGroupLevel++;
    routes();
    this._resetGroup();

    return this;
  }

  public template(template) {
    this.groupInfo.template = {
      template
    };
    return this;
  }

  public prefix(prefix) {
    if (this.groupInfo.prefix.length > 0) {
      prefix = `${this.groupInfo.prefix}/${prefix}`;
    } else {
      prefix = this.groupInfo.prefix = prefix;
    }

    this.groupInfo.prefix = prefix.replace(/(\/)(?=\/*\1)/g, "");

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
      prefix: "",
      middleware: [],
      template: null
    };
  }
}
