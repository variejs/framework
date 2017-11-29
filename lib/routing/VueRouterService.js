"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var _ = require("lodash");
var Route_1 = require("./Route");
var vue_router_1 = require("vue-router");
var inversify_1 = require("inversify");
var middleware_1 = require("@routes/middleware");
var VueRouterService = /** @class */ (function() {
  function VueRouterService() {
    this.routes = [];
    this.currentMeta = null;
    this.groupMeta = [];
    this.loaded = false;
    vue_1.default.use(vue_router_1.default);
    this._resetCurrentMeta();
  }
  VueRouterService.prototype.getRouter = function() {
    return this.router;
  };
  VueRouterService.prototype.buildRouter = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
      resolve(_this.routes);
    }).then(function(routes) {
      var tempRoutes = [];
      var paths = {};
      _.each(routes, function(route) {
        if (route.meta && route.meta.template) {
          var path = route.meta.template.prefix;
          if (!paths[path]) {
            paths[path] = {
              routes: [],
              component: route.meta.template.component
            };
          }
          paths[path].routes.push(route);
        } else {
          tempRoutes.push(route);
        }
      });
      _.each(paths, function(data, path) {
        tempRoutes.push({
          path: path,
          children: data.routes,
          component: data.component
        });
      });
      $config.set("router.routes", tempRoutes);
      _this.router = new vue_router_1.default($config.get("router"));
      _this.registerMiddleware();
    });
  };
  VueRouterService.prototype.route = function(path, component, props) {
    if (props === void 0) {
      props = {};
    }
    var route = new Route_1.default(
      path,
      component,
      _.clone(this.currentMeta),
      props
    );
    this.routes.push(route);
    return route;
  };
  VueRouterService.prototype.middleware = function(middleware) {
    this.currentMeta.middleware = this.currentMeta.middleware.concat(
      middleware
    );
    return this;
  };
  VueRouterService.prototype.redirect = function(path, redirect) {
    this.routes.push({
      path: path,
      redirect: redirect
    });
  };
  VueRouterService.prototype.group = function(routes) {
    routes();
    this._resetCurrentMeta();
    return this;
  };
  VueRouterService.prototype.template = function(prefix, template) {
    this.currentMeta.template = {
      template: template,
      prefix: this.currentMeta.prefix
        ? this.currentMeta.prefix + "/" + prefix
        : prefix
    };
    this.prefix(prefix);
    return this;
  };
  VueRouterService.prototype.prefix = function(prefix) {
    if (this.currentMeta.prefix.length > 0) {
      this.currentMeta.prefix = this.currentMeta.prefix + "/" + prefix;
    } else {
      this.currentMeta.prefix = prefix;
    }
    return this;
  };
  VueRouterService.prototype.requireAll = function(requireContext) {
    return requireContext.keys().map(requireContext);
  };
  VueRouterService.prototype.registerMiddleware = function() {
    var _this = this;
    var middleware = middleware_1.default;
    _.each(middleware, function(middlewareFunction, middleware) {
      _this.router.beforeResolve(function(to, from, next) {
        if (to.meta.middleware && to.meta.middleware.indexOf(middleware) > -1) {
          return middlewareFunction(to, from, next);
        }
        next();
      });
    });
  };
  VueRouterService.prototype._resetCurrentMeta = function() {
    this.currentMeta = {
      prefix: "",
      middleware: []
    };
  };
  VueRouterService = __decorate(
    [inversify_1.injectable(), __metadata("design:paramtypes", [])],
    VueRouterService
  );
  return VueRouterService;
})();
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsMEJBQTRCO0FBQzVCLGlDQUE0QjtBQUM1Qix5Q0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLGlEQUE0QztBQUk1QztJQU9FO1FBTk8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVULGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdwQixhQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0NBQVMsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU8sc0NBQVcsR0FBbkI7UUFBQSxpQkFxQ0M7UUFwQ0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1osSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXBCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVmLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSztnQkFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7NEJBQ1osTUFBTSxFQUFFLEVBQUU7NEJBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7eUJBQ3pDLENBQUM7b0JBQ0osQ0FBQztvQkFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO2dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxJQUFJO29CQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxnQ0FBSyxHQUFaLFVBQWEsSUFBSSxFQUFFLFNBQXNCLEVBQUUsS0FBVTtRQUFWLHNCQUFBLEVBQUEsVUFBVTtRQUNuRCxJQUFJLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0scUNBQVUsR0FBakIsVUFBa0IsVUFBVTtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQzlELFVBQVUsQ0FDWCxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxtQ0FBUSxHQUFmLFVBQWdCLElBQUksRUFBRSxRQUFRO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQUssR0FBWixVQUFhLE1BQU07UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1DQUFRLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLFFBQVE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUc7WUFDMUIsUUFBUSxVQUFBO1lBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTtnQkFDN0IsQ0FBQyxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxTQUFJLE1BQVE7Z0JBQ3hDLENBQUMsQ0FBQyxNQUFNO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxpQ0FBTSxHQUFiLFVBQWMsTUFBTTtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sU0FBSSxNQUFRLENBQUM7UUFDbkUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ25DLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHFDQUFVLEdBQWxCLFVBQW1CLGNBQWM7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLDZDQUFrQixHQUExQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxVQUFVLEdBQUcsb0JBQVUsQ0FBQztRQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLGtCQUFrQixFQUFFLFVBQVU7WUFDaEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUk7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0Q0FBaUIsR0FBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO0lBQ0osQ0FBQztJQTFIa0IsZ0JBQWdCO1FBRHBDLHNCQUFVLEVBQUU7O09BQ1EsZ0JBQWdCLENBMkhwQztJQUFELHVCQUFDO0NBQUEsQUEzSEQsSUEySEM7a0JBM0hvQixnQkFBZ0IifQ==
