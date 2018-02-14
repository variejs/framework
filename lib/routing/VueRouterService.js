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
var camelCase = require("camelcase");
var VueRouterService = /** @class */ (function () {
    function VueRouterService() {
        this.routes = [];
        this.groupInfo = null;
        this.groupMeta = [];
        this.loaded = false;
        this.oldMeta = {};
        this.groups = [];
        this.currentGroupLevel = 0;
        vue_1.default.use(vue_router_1.default);
        this._resetGroup();
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
                if (route.groupLevel !== null && route.groupLevel >= 0) {
                    var group = _this.groups[route.groupLevel];
                    var prefix = group.prefix;
                    var path = prefix.replace(/(\/)(?=\/*\1)/g, "");
                    var name_1 = "" + prefix + route.path;
                    route.name = camelCase(name_1.replace(/\//g, " "));
                    var dotPath = "/" +
                        prefix
                            .replace(/(\/)(?=\/*\1)/g, "")
                            .replace(/\//g, ".tempRoutes.")
                            .replace(/\.tempRoutes\.$/, "");
                    if (!getByDot_1.default(paths, dotPath)) {
                        setByDot_1.default(paths, dotPath, {
                            path: path,
                            tempRoutes: [],
                            component: require("@views/" + group.template.template)
                        });
                    }
                    getByDot_1.default(paths, dotPath).tempRoutes.push(route);
                }
                else {
                    route.name = camelCase(route.path.replace(/\//g, " "));
                    tempRoutes.push(route);
                }
            });
            for (var path in paths) {
                var data = paths[path];
                tempRoutes.push({
                    path: path.replace(/(\/)(?=\/*\1)/g, ""),
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
    };
    VueRouterService.prototype.route = function (path, component, props) {
        if (props === void 0) { props = {}; }
        var route = new Route_1.default(path, component, this.currentGroupLevel >= 0 ? this.currentGroupLevel : null, props);
        this.routes.push(route);
        return route;
    };
    VueRouterService.prototype.middleware = function (middleware) {
        this.groupInfo.middleware = this.groupInfo.middleware.concat(middleware);
        return this;
    };
    VueRouterService.prototype.redirect = function (path, redirect) {
        this.routes.push({
            path: path,
            redirect: redirect
        });
    };
    VueRouterService.prototype.group = function (path, routes) {
        this.groupInfo.prefix = this.groupInfo.prefix
            ? this.groupInfo.prefix + "/" + path
            : path;
        var groupInfo = Object.assign({}, this.groupInfo);
        this.groups.push(groupInfo);
        this.currentGroupLevel++;
        routes();
        this._resetGroup();
        return this;
    };
    VueRouterService.prototype.template = function (template) {
        this.groupInfo.template = {
            template: template
        };
        return this;
    };
    VueRouterService.prototype.prefix = function (prefix) {
        if (this.groupInfo.prefix.length > 0) {
            prefix = this.groupInfo.prefix + "/" + prefix;
        }
        else {
            prefix = this.groupInfo.prefix = prefix;
        }
        this.groupInfo.prefix = prefix.replace(/(\/)(?=\/*\1)/g, "");
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
    VueRouterService.prototype._resetGroup = function () {
        this.currentGroupLevel--;
        this.groupInfo = {
            prefix: "",
            middleware: [],
            template: null
        };
    };
    VueRouterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VueRouterService);
    return VueRouterService;
}());
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsaURBQTRDO0FBRTVDLG9EQUErQztBQUMvQyxvREFBK0M7QUFDL0MscUNBQXVDO0FBSXZDO0lBUUU7UUFQTyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVVYLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQVI1QixhQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLG9DQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUlPLHNDQUFXLEdBQW5CO1FBQUEsaUJBc0RDO1FBckRDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNaLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVwQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFZixNQUFNLENBQUMs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