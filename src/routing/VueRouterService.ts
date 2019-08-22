import Vue from "vue";
import Route from "./Route";
import VueRouter from "vue-router";
import clone from "./../utilities/clone";
import { inject, injectable } from "inversify";
import RouterInterface from "./RouterInterface";
import ConfigInterface from "../config/ConfigInterface";
import RouteMiddlewareInterface from "./RouteMiddlewareInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";

interface GroupInfo {
  path: string;
  component: object;
  area: null | object;
  children: Array<Route | GroupInfo>;
  meta: {
    data: object;
    layout: string;
    middleware: Array<any>;
  };
}

interface RedirectRoute {
  path: string;
  redirect: string;
}

@injectable()
export default class VueRouterService implements RouterInterface {
  public router;
  public routes: Array<Route | RedirectRoute | GroupInfo> = [];

  protected groupInfo;
  protected currentGroupLevel = 0;
  protected app: ApplicationInterface;
  protected groups: Array<GroupInfo> = [];
  protected configService: ConfigInterface;
  protected wildCardRoutes: Array<Route> = [];

  constructor(
    @inject("app") app: ApplicationInterface,
    @inject("ConfigService") configService: ConfigInterface,
  ) {
    this.app = app;
    this.configService = configService;
    this.resetGroup();
    Vue.use(VueRouter);
  }

  public getRouter() {
    return this.router;
  }

  public register(routes, ...services) {
    routes(this, services);
    return this;
  }

  public buildRouter() {
    if (this.wildCardRoutes.length) {
      this.wildCardRoutes.forEach((route) => {
        if (route.group) {
          route.group.children.push(route);
        } else {
          this.routes.push(route);
        }
      });
    }
    this.router = new VueRouter(
      Object.assign({}, this.configService.get("router"), {
        routes: this.routes,
      }),
    );

    this.setupMiddleware();
  }

  public route(path: string, component: string | object, props = true): Route {
    let route = new Route(path, component, props);

    if (this.currentGroupLevel > -1) {
      // children routes cannot begin with a `/` as they would not be children
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
        tempName =
          this.groups[groupIndex].path !== "/"
            ? this.groups[groupIndex].path + "/" + tempName
            : tempName;
      }
      this.convertRoutePathToRouteName(route, tempName + route.path);

      route.meta.middleware = this.groups[
        this.currentGroupLevel
      ].meta.middleware;

      route.meta.data = this.groups[this.currentGroupLevel].meta.data;

      return route;
    }

    if (route.path === "*") {
      this.wildCardRoutes.push(route);
    } else {
      route.setMeta(this.groupInfo.meta);
      this.routes.push(route);
    }

    this.convertRoutePathToRouteName(route);
    return route;
  }

  protected convertRoutePathToRouteName(route: Route, path?: string) {
    path = path ? path : route.path;
    if (path) {
      route.setName(
        path
          .replace(/^\/|\/$/g, "")
          .replace(/(\/?)(:.*?)(\/|$)/g, ".")
          .replace(/^\.|\.$/g, "")
          .toLowerCase(),
      );
    }
  }

  public middleware(middleware: Array<any>) {
    this.groupInfo.meta.middleware = this.groupInfo.meta.middleware.concat(
      middleware,
    );
    return this;
  }

  public redirect(path: string, redirect: string) {
    this.routes.push({
      path: path,
      redirect: redirect,
    });
    return this;
  }

  public group(routes: Function) {
    this.currentGroupLevel++;
    this.groups.push(clone(this.groupInfo));
    // Areas only apply to 1 group not all subsequent children groups
    delete this.groupInfo.area;
    routes();
    this.resetGroup();
    return this;
  }

  public area(area: object) {
    this.groupInfo.area = area;
    return this;
  }

  public prefix(prefix: string) {
    this.groupInfo.path = prefix || "";
    if (this.currentGroupLevel > -1) {
      this.groupInfo.path = this.groupInfo.path.replace(/^\/*/g, "");
    }
    return this;
  }

  public layout(layout) {
    this.groupInfo.meta.layout = layout;
    return this;
  }

  public data(data) {
    this.groupInfo.meta.data = data;
    return this;
  }

  /**
   * We loop through all middleware of that route
   * Making sure we resolve them one at a time
   */
  public setupMiddleware() {
    this.router.beforeResolve((to, from, next) => {
      let stopMiddleware = false;
      if (to.meta.middleware && to.meta.middleware.length) {
        return to.meta.middleware.reduce(
          (promise, currentValue, currentIndex) => {
            return promise.then(() => {
              if (stopMiddleware === false) {
                return this.getMiddleware(currentValue).handler(
                  to,
                  from,
                  (options) => {
                    if (options) {
                      next(options);
                      stopMiddleware = true;
                      return;
                    } else if (currentIndex === to.meta.middleware.length - 1) {
                      return next();
                    }
                  },
                );
              }
            });
          },
          Promise.resolve(),
        );
      }
      next();
    });
  }

  protected getMiddleware(middleware) {
    let containerMiddlewareName = `routerMiddleware${middleware.name}`;
    if (!this.app.isBound(containerMiddlewareName)) {
      this.app.bind<RouteMiddlewareInterface>(
        containerMiddlewareName,
        middleware,
      );
    }
    return this.app.make<RouteMiddlewareInterface>(containerMiddlewareName);
  }

  /**
   * We build all the group information by looping through each level
   *
   * Each group will go up in a level with a child group is made
   *
   * We then go through each grouping and set middleware / areas
   * and place the children for that group.
   *
   * By going up and down for each group we retain the data for the group level
   * allowing us to chain in a pretty way
   */
  protected resetGroup() {
    this.groupInfo = {
      path: "/",
      meta: {
        data: {},
        middleware: [],
        layout: this.configService.get("view.defaultLayout", "public"),
      },
      area: null,
      children: [],
      component: {
        template: "<router-view/>",
      },
    };

    if (this.groups.length) {
      let childGroup = this.groups[this.currentGroupLevel];
      let parentGroup = this.groups[this.currentGroupLevel - 1];

      if (childGroup.area) {
        childGroup.component = childGroup.area;
        delete childGroup.area;
      }

      if (parentGroup) {
        if (childGroup.path === parentGroup.path) {
          childGroup.path = "";
        }
        this.groupInfo.meta.data = parentGroup.meta.data;
        this.groupInfo.meta.layout = parentGroup.meta.layout;
        this.groupInfo.meta.middleware = parentGroup.meta.middleware;
        parentGroup.children.push(childGroup);
      }

      this.groups.splice(this.currentGroupLevel, 1);

      if (this.currentGroupLevel === 0) {
        this.routes.push(childGroup);
      }
    }

    this.currentGroupLevel--;
  }
}
