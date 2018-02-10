import Vue from "vue";
import Route from "./Route";
import VueRouter from "vue-router";
import { injectable } from "inversify";
import Middleware from "@routes/middleware";
import RouterInterface from "./RouterInterface";
import setByDot from './../utilities/setByDot';
import getByDot from './../utilities/getByDot';

@injectable()
export default class VueRouterService implements RouterInterface {
  public routes = [];
  public router: VueRouter;
  protected currentMeta = null;
  protected groupMeta = [];
  public loaded = false;

  constructor() {
    Vue.use(VueRouter);
    this._resetCurrentMeta();
  }

  public getRouter() {
    return this.router;
  }

  private buildRouter() {
    return new Promise(resolve => {
      this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
      resolve(this.routes);
    }).then(routes => {
      let tempRoutes = [];

      let paths = {};

      routes.forEach(route => {
        if (route.meta && route.meta.template) {
          let path = route.meta.template.prefix.replace(/(\/)(?=\/*\1)/g, '');

          let dotPath = '/'+route.meta.template.prefix.replace(/(\/)(?=\/*\1)/g, '').replace(/\//g, '.tempRoutes.').replace(/\.tempRoutes\.$/, "");

          if (!getByDot(paths, dotPath)) {

            setByDot(paths, dotPath,{
              path,
              tempRoutes: [],
              component: route.meta.template.component
            })
          }
          getByDot(paths, dotPath).tempRoutes.push(route)
        } else {
          tempRoutes.push(route);
        }
      });

      for (let path in paths) {
        let data = paths[path];
        tempRoutes.push({
          path: path.replace(/(\/)(?=\/*\1)/g, ''),
          children: this._getPaths(data.routes, data.tempRoutes),
          component: data.component
        });
      }

      $config.set("router.routes", tempRoutes);
      this.router = new VueRouter($config.get("router"));
      this.registerMiddleware();
    });
  }

  private _getPaths(routes = [], tempRoutes : Object) {
    for(let tempRoute in tempRoutes) {
      tempRoute = tempRoutes[tempRoute];
      tempRoute.path = tempRoute.path.substring(tempRoute.path.lastIndexOf('/')).replace(/^\//, '')
      if(tempRoute.tempRoutes) {
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
      Object.assign({}, this.currentMeta),
      props
    );
    this.routes.push(route);
    return route;
  }

  public middleware(middleware) {
    this.currentMeta.middleware = this.currentMeta.middleware.concat(
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
    routes();
    this._resetCurrentMeta();
    return this;
  }

  public template(prefix, template) {
    this.currentMeta.template = {
      template,
      prefix: this.currentMeta.prefix
        ? `${this.currentMeta.prefix}/${prefix}`
        : prefix
    };
    this.prefix(prefix);
    return this;
  }

  public prefix(prefix) {
    if (this.currentMeta.prefix.length > 0) {
      prefix = `${this.currentMeta.prefix}/${prefix}`;
    } else {
      prefix = this.currentMeta.prefix = prefix;
    }

    this.currentMeta.prefix = prefix.replace(/(\/)(?=\/*\1)/g, '')

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

  private _resetCurrentMeta() {
    this.currentMeta = {
      prefix: "",
      middleware: []
    };
  }
}
