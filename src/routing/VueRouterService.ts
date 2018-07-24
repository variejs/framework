import Vue from "vue";
import Route from "./Route";
import VueRouter from "vue-router";
import { injectable } from "inversify";
import Middleware from "@routes/middleware";
import RouterInterface from "./RouterInterface";

@injectable()
export default class VueRouterService implements RouterInterface {
  public routes = [];
  public router: VueRouter;

  protected groups = [];
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
        wildCardRoutes.forEach(route => {
          if (route.group) {
            route.group.children.push(route);
          } else {
            routes.push(route);
          }
        });
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
        route.group = this.groups[this.currentGroupLevel];
        this.wildCardRoutes.push(route);
      } else {
        this.groups[this.currentGroupLevel].children.push(route);
      }

      let tempName = "";
      let groupIndex = this.currentGroupLevel;
      for (groupIndex; groupIndex > -1; groupIndex--) {
        tempName = `${this.groups[groupIndex].path}.${tempName}`;
      }

      this.convertRoutePathToRouteName(route, tempName + route.path);

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

    this.convertRoutePathToRouteName(route);
    return route;
  }

  private convertRoutePathToRouteName(route: Route, path?: string) {
    path = JSON.parse(JSON.stringify(path ? path : route.path));
    // https://regex101.com/r/uV1OfL/3
    route.setName(
      path
        .replace(/\:/g, "")
        .replace(/(^\/|\/$)/, "")
        .replace(/\//g, ".")
    );
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
    this.currentGroupLevel++;
    this.groups.push(JSON.parse(JSON.stringify(this.groupInfo)));
    routes();
    this._resetGroup();
    return this;
  }

  public area(area) {
    this.groupInfo.area = area;
    return this;
  }

  public prefix(prefix) {
    this.groupInfo.path = prefix;
    if (this.currentGroupLevel > -1) {
      this.groupInfo.path = this.groupInfo.path.replace(/^\/*/g, "");
    }
    return this;
  }

  public layout(layout) {
    this.groupInfo.meta.layout = layout;
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
    this.groupInfo = {
      path: "/",
      meta: {
        middleware: []
      },
      area: null,
      children: []
    };

    if (this.groups.length) {
      if (this.currentGroupLevel === 0) {
        let baseGroup = this.groups[0];
        if(baseGroup.area) {
          baseGroup.component = require(`@views/${baseGroup.area}`).default;
        }
        this.routes.push(baseGroup);
        this.groups = [];
      } else {
        let childGroup = this.groups[this.currentGroupLevel];
        let parentGroup = this.groups[this.currentGroupLevel - 1];
        if(childGroup.area) {
          childGroup.component = require(`@views/${childGroup.area}`).default;
        }
        parentGroup.children.push(childGroup);
        this.groups.splice(this.currentGroupLevel, 1);
      }
    }

    this.currentGroupLevel--;
  }
}
