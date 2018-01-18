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
                    var path = route.meta.template.prefix;
                    if (!paths[path]) {
                        paths[path] = {
                            routes: [],
                            component: route.meta.template.component
                        };
                    }
                    paths[path].routes.push(route);
                }
                else {
                    tempRoutes.push(route);
                }
            });
            for (var path in paths) {
                var data = paths[path];
                tempRoutes.push({
                    path: path,
                    children: data.routes,
                    component: data.component
                });
            }
            $config.set("router.routes", tempRoutes);
            _this.router = new vue_router_1.default($config.get("router"));
            _this.registerMiddleware();
        });
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
            this.currentMeta.prefix = this.currentMeta.prefix + "/" + prefix;
        }
        else {
            this.currentMeta.prefix = prefix;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsaURBQTRDO0FBSTVDO0lBT0U7UUFOTyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3BCLGFBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxzQ0FBVyxHQUFuQjtRQUFBLGlCQXNDQztRQXJDQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFFcEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxJ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