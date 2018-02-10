"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Route_1 = require("./Route");
var vue_router_1 = require("vue-router");
var inversify_1 = require("inversify");
var middleware_1 = require("@routes/middleware");
var setByDot_1 = require("./../utilities/setByDot");
var getByDot_1 = require("./../utilities/getByDot");
var VueRouterService = /** @class */ (function () {
    function VueRouterService() {
        this.routes = [];
        this.currentMeta = null;
        this.groupMeta = [];
        this.loaded = false;
        vue_1.default.use(vue_router_1.default);
        this._resetCurrentMeta();
    }
    VueRouterService.prototype.getRouter = function () {
        return this.router;
    };
    VueRouterService.prototype.buildRouter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
            resolve(_this.routes);
        }).then(function (routes) {
            var tempRoutes = [];
            var paths = {};
            routes.forEach(function (route) {
                if (route.meta && route.meta.template) {
                    var path = route.meta.template.prefix.replace(/(\/)(?=\/*\1)/g, '');
                    var dotPath = '/' + route.meta.template.prefix.replace(/(\/)(?=\/*\1)/g, '').replace(/\//g, '.tempRoutes.').replace(/\.tempRoutes\.$/, "");
                    if (!getByDot_1.default(paths, dotPath)) {
                        setByDot_1.default(paths, dotPath, {
                            path: path,
                            tempRoutes: [],
                            component: route.meta.template.component
                        });
                    }
                    getByDot_1.default(paths, dotPath).tempRoutes.push(route);
                }
                else {
                    tempRoutes.push(route);
                }
            });
            for (var path in paths) {
                var data = paths[path];
                tempRoutes.push({
                    path: path.replace(/(\/)(?=\/*\1)/g, ''),
                    children: _this._getPaths(data.routes, data.tempRoutes),
                    component: data.component
                });
            }
            $config.set("router.routes", tempRoutes);
            _this.router = new vue_router_1.default($config.get("router"));
            _this.registerMiddleware();
        });
    };
    VueRouterService.prototype._getPaths = function (routes, tempRoutes) {
        if (routes === void 0) { routes = []; }
        for (var tempRoute in tempRoutes) {
            tempRoute = tempRoutes[tempRoute];
            tempRoute.path = tempRoute.path.substring(tempRoute.path.lastIndexOf('/')).replace(/^\//, '');
            if (tempRoute.tempRoutes) {
                tempRoute.children = this._getPaths([], tempRoute.tempRoutes);
                delete tempRoute.tempRoutes;
            }
            routes.push(tempRoute);
        }
        return routes;
    };
    VueRouterService.prototype.route = function (path, component, props) {
        if (props === void 0) { props = {}; }
        var route = new Route_1.default(path, component, Object.assign({}, this.currentMeta), props);
        this.routes.push(route);
        return route;
    };
    VueRouterService.prototype.middleware = function (middleware) {
        this.currentMeta.middleware = this.currentMeta.middleware.concat(middleware);
        return this;
    };
    VueRouterService.prototype.redirect = function (path, redirect) {
        this.routes.push({
            path: path,
            redirect: redirect
        });
    };
    VueRouterService.prototype.group = function (routes) {
        routes();
        this._resetCurrentMeta();
        return this;
    };
    VueRouterService.prototype.template = function (prefix, template) {
        this.currentMeta.template = {
            template: template,
            prefix: this.currentMeta.prefix
                ? this.currentMeta.prefix + "/" + prefix
                : prefix
        };
        this.prefix(prefix);
        return this;
    };
    VueRouterService.prototype.prefix = function (prefix) {
        if (this.currentMeta.prefix.length > 0) {
            prefix = this.currentMeta.prefix + "/" + prefix;
        }
        else {
            prefix = this.currentMeta.prefix = prefix;
        }
        this.currentMeta.prefix = prefix.replace(/(\/)(?=\/*\1)/g, '');
        return this;
    };
    VueRouterService.prototype.requireAll = function (requireContext) {
        return requireContext.keys().map(requireContext);
    };
    VueRouterService.prototype.registerMiddleware = function () {
        var middleware = middleware_1.default;
        var _loop_1 = function (middlewareName) {
            var middlewareFunction = middleware[middlewareName];
            this_1.router.beforeResolve(function (to, from, next) {
                if (to.meta.middleware &&
                    to.meta.middleware.indexOf(middlewareName) > -1) {
                    return middlewareFunction(to, from, next);
                }
                next();
            });
        };
        var this_1 = this;
        for (var middlewareName in middleware) {
            _loop_1(middlewareName);
        }
    };
    VueRouterService.prototype._resetCurrentMeta = function () {
        this.currentMeta = {
            prefix: "",
            middleware: []
        };
    };
    VueRouterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VueRouterService);
    return VueRouterService;
}());
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsaURBQTRDO0FBRTVDLG9EQUErQztBQUMvQyxvREFBK0M7QUFHL0M7SUFPRTtRQU5PLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFVCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHcEIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLHNDQUFXLEdBQW5CO1FBQUEsaUJBMENDO1FBekNDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNaLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVwQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFZixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEs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