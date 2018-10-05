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
  private app: ApplicationInterface;
  private configService: ConfigInterface;

  public router;
  public routes: Array<Route | RedirectRoute | GroupInfo> = [];

  protected groupInfo;
  protected groups: Array<GroupInfo> = [];
  protected currentGroupLevel = -1;
  protected wildCardRoutes: Array<Route> = [];

  constructor(
    @inject("app") app: ApplicationInterface,
    @inject("ConfigService") configService: ConfigInterface
  ) {
    this.app = app;
    this.configService = configService;
    this._resetGroup();
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
      this.wildCardRoutes.forEach(route => {
        if (route.group) {
          route.group.children.push(route);
        } else {
          this.routes.push(route);
        }
      });
    }
    this.router = new VueRouter(
      Object.assign({}, this.configService.get("router"), {
        routes: this.routes
      })
    );
    this.setupMiddleware();
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
    path = JSON.stringify(path ? path : route.path);
    // https://regex101.com/r/uV1OfL/3
    route.setName(
      path
        .replace(/\:/g, "")
        .replace(/(^\/|\/$)/, "")
        .replace(/\//g, ".")
    );
  }

  public middleware(middleware: Array<any>) {
    this.groupInfo.meta.middleware = this.groupInfo.meta.middleware.concat(
      middleware
    );
    return this;
  }

  public redirect(path: string, redirect: string) {
    this.routes.push({
      path: path,
      redirect: redirect
    });
    return this;
  }

  public group(routes: Function) {
    this.currentGroupLevel++;
    this.groups.push(clone(this.groupInfo));
    routes();
    this._resetGroup();
    return this;
  }

  public area(area: object) {
    this.groupInfo.area = area;
    return this;
  }

  public prefix(prefix: string) {
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
                  options => {
                    if (options) {
                      next(options);
                      stopMiddleware = true;
                      return;
                    } else if (currentIndex === to.meta.middleware.length - 1) {
                      return next();
                    }
                  }
                );
              }
            });
          },
          Promise.resolve()
        );
      }
      next();
    });
  }

  private getMiddleware(middleware) {
    let containerMiddlewareName = `routerMiddleware${middleware.name}`;
    if (!this.app.$container.isBound(containerMiddlewareName)) {
      this.app.bind<RouteMiddlewareInterface>(
        containerMiddlewareName,
        middleware
      );
    }
    return this.app.make<RouteMiddlewareInterface>(containerMiddlewareName);
  }

  private _resetGroup() {
    this.groupInfo = {
      path: "/",
      meta: {
        middleware: [],
        layout: this.configService.get("view.defaultLayout", "public")
      },
      area: null,
      children: [],
      component: {
        template: "<router-view/>"
      }
    };

    if (this.groups.length) {
      if (this.currentGroupLevel === 0) {
        let baseGroup: GroupInfo = this.groups[0];
        if (baseGroup.area) {
          baseGroup.component = baseGroup.area;
        }
        this.routes.push(baseGroup);
        this.groups = [];
      } else {
        let childGroup = this.groups[this.currentGroupLevel];
        let parentGroup = this.groups[this.currentGroupLevel - 1];

        if (parentGroup) {
          this.groupInfo.meta.layout = parentGroup.meta.layout;
          this.groupInfo.meta.middleware = parentGroup.meta.middleware;
        }

        if (childGroup.area) {
          childGroup.component = childGroup.area;
        }
        parentGroup.children.push(childGroup);
        this.groups.splice(this.currentGroupLevel, 1);
      }
    }

    this.currentGroupLevel--;
  }
}
