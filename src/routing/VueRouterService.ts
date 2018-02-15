import Vue from "vue";
import Route from "./Route";
import VueRouter from "vue-router";
import * as camelCase from "camelcase";
import { injectable } from "inversify";
import Middleware from "@routes/middleware";
import RouterInterface from "./RouterInterface";

@injectable()
export default class VueRouterService implements RouterInterface {
  public routes = [];
  public router: VueRouter;

  protected groups = [];
  protected groupMeta = [];
  protected groupInfo = null;
  protected currentGroupLevel = 0;

  protected wildCardRoutes = [];

  constructor() {
    Vue.use(VueRouter);
    this._resetGroup();
  }

  public getRouter() {
    return this.router;
  }

  private requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }

  private buildRouter() {
    return new Promise(resolve => {
      this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
      resolve({
        routes: this.routes,
        wildCardRoutes: this.wildCardRoutes
      });
    }).then(({ routes, wildCardRoutes }) => {
      if (wildCardRoutes.length) {
        let groups = [];

        wildCardRoutes.forEach(route => {
          if (route.groups) {
            groups = JSON.parse(JSON.stringify(route.groups));

            groups.forEach(group => {
              group.children = [];
              group.component = require(`@views/${group.layout}`).default;
            });

            groups[route.groupLevel].children.push(route);

            for (
              let groupIndex = route.groupLevel;
              groupIndex > 0;
              groupIndex--
            ) {
              groups[groupIndex - 1].children.push(groups[groupIndex]);
            }
          } else {
            routes.push(route);
          }
        });

        if (groups.length) {
          routes.push(groups[0]);
        }
      }

      $config.set("router.routes", routes);
      this.router = new VueRouter($config.get("router"));
      this.registerMiddleware();
    });
  }

  public route(path: string, component: string | object, props = {}): Route {
    let route = new Route(path, component, props);

    if (this.currentGroupLevel > -1) {
      route.path = route.path.replace(/^\/*/g, "");

      if (route.path === "*") {
        route.groups = this.groups;
        route.groupLevel = this.currentGroupLevel;
        this.wildCardRoutes.push(route);
      } else {
        this.groups[this.currentGroupLevel].children.push(route);
      }

      let tempName = "";
      let groupIndex = this.currentGroupLevel;
      for (groupIndex; groupIndex > -1; groupIndex--) {
        tempName = `${this.groups[groupIndex].path} ${tempName}`;
      }
      tempName = `${tempName} ${route.path}`;

      route.setName(camelCase(tempName.replace(/\//g, "")));
      route.meta.middleware = this.groups[
        this.currentGroupLevel
      ].meta.middleware;

      return route;
    }

    if (route.path === "*") {
      this.wildCardRoutes.push(route);
    } else {
      route.setMeta(this.groupInfo);
      this.routes.push(route);
    }

    route.setName(camelCase(route.path.replace(/\/g/, " ")));

    return route;
  }

  public middleware(middleware) {
    this.groupInfo.meta.middleware = this.groupInfo.meta.middleware.concat(
      middleware
    );
    return this;
  }

  public redirect(path, redirect) {
    this.routes.push({
      path: path,
      redirect: redirect
    });
  }

  public group(routes) {
    this.groups.push(JSON.parse(JSON.stringify(this.groupInfo)));
    this.currentGroupLevel++;
    routes();
    this._resetGroup();

    return this;
  }

  public layout(layout) {
    this.groupInfo.layout = layout;
    return this;
  }

  public prefix(prefix) {
    this.groupInfo.path = prefix;
    if (this.currentGroupLevel > -1) {
      this.groupInfo.path = this.groupInfo.path.replace(/^\/*/g, "");
    }
    return this;
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
          if (middlewareFunction(to, from, next)) {
            next();
          }
          return false;
        }
        next();
      });
    }
  }

  private _resetGroup() {
    this.currentGroupLevel--;
    this.groupInfo = {
      path: "/",
      meta: {
        middleware: []
      },
      layout: null,
      children: []
    };

    if (this.currentGroupLevel === -1 && this.groups.length) {
      this.groups.forEach(group => {
        group.component = require(`@views/${group.layout}`).default;
      });

      for (
        let groupIndex = this.groups.length - 1;
        groupIndex > 0;
        groupIndex--
      ) {
        this.groups[groupIndex - 1].children.push(this.groups[groupIndex]);
      }
      this.routes.push(this.groups[0]);

      this.groups = [];
    }
  }
}
