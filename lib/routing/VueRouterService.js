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
        this.groups = [];
        this.groupMeta = [];
        this.groupInfo = null;
        this.currentGroupLevel = 0;
        this.wildCardRoutes = [];
        vue_1.default.use(vue_router_1.default);
        this._resetGroup();
    }
    VueRouterService.prototype.getRouter = function () {
        return this.router;
    };
    VueRouterService.prototype.requireAll = function (requireContext) {
        return requireContext.keys().map(requireContext);
    };
    VueRouterService.prototype.buildRouter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.requireAll(require.context("@routes", false, /^\.\/.*\.(ts)$/));
            resolve({
                routes: _this.routes,
                wildCardRoutes: _this.wildCardRoutes
            });
        }).then(function (_a) {
            var routes = _a.routes, wildCardRoutes = _a.wildCardRoutes;
            if (wildCardRoutes.length) {
                wildCardRoutes.forEach(function (route) {
                    if (route.group) {
                        route.group.children.push(route);
                    }
                    else {
                        routes.push(route);
                    }
                });
            }
            $config.set("router.routes", routes);
            _this.router = new vue_router_1.default($config.get("router"));
            _this.registerMiddleware();
        });
    };
    VueRouterService.prototype.route = function (path, component, props) {
        if (props === void 0) { props = {}; }
        var route = new Route_1.default(path, component, props);
        if (this.currentGroupLevel > -1) {
            route.path = route.path.replace(/^\/*/g, "");
            if (route.path === "*") {
                route.group = this.groups[this.currentGroupLevel];
                this.wildCardRoutes.push(route);
            }
            else {
                this.groups[this.currentGroupLevel].children.push(route);
            }
            var tempName = "";
            var groupIndex = this.currentGroupLevel;
            for (groupIndex; groupIndex > -1; groupIndex--) {
                tempName = this.groups[groupIndex].path + "." + tempName;
            }
            this.convertRoutePathToRouteName(route, tempName + route.path);
            route.meta.middleware = this.groups[this.currentGroupLevel].meta.middleware;
            return route;
        }
        if (route.path === "*") {
            this.wildCardRoutes.push(route);
        }
        else {
            route.setMeta(this.groupInfo);
            this.routes.push(route);
        }
        this.convertRoutePathToRouteName(route);
        return route;
    };
    VueRouterService.prototype.convertRoutePathToRouteName = function (route, path) {
        path = JSON.parse(JSON.stringify(path ? path : route.path));
        // https://regex101.com/r/uV1OfL/3
        route.setName(path
            .replace(/\:/g, "")
            .replace(/(^\/|\/$)/, "")
            .replace(/\//g, "."));
    };
    VueRouterService.prototype.middleware = function (middleware) {
        this.groupInfo.meta.middleware = this.groupInfo.meta.middleware.concat(middleware);
        return this;
    };
    VueRouterService.prototype.redirect = function (path, redirect) {
        this.routes.push({
            path: path,
            redirect: redirect
        });
    };
    VueRouterService.prototype.group = function (routes) {
        this.currentGroupLevel++;
        this.groups.push(JSON.parse(JSON.stringify(this.groupInfo)));
        routes();
        this._resetGroup();
        return this;
    };
    VueRouterService.prototype.layout = function (layout) {
        this.groupInfo.layout = layout;
        return this;
    };
    VueRouterService.prototype.prefix = function (prefix) {
        this.groupInfo.path = prefix;
        if (this.currentGroupLevel > -1) {
            this.groupInfo.path = this.groupInfo.path.replace(/^\/*/g, "");
        }
        return this;
    };
    VueRouterService.prototype.registerMiddleware = function () {
        var middleware = middleware_1.default;
        var _loop_1 = function (middlewareName) {
            var middlewareFunction = middleware[middlewareName];
            this_1.router.beforeResolve(function (to, from, next) {
                if (to.meta.middleware &&
                    to.meta.middleware.indexOf(middlewareName) > -1) {
                    if (middlewareFunction(to, from, next)) {
                        next();
                    }
                    return false;
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
        this.groupInfo = {
            path: "/",
            meta: {
                middleware: []
            },
            layout: null,
            children: []
        };
        if (this.groups.length) {
            if (this.currentGroupLevel === 0) {
                var baseGroup = this.groups[0];
                baseGroup.component = require("@views/" + baseGroup.layout).default;
                this.routes.push(baseGroup);
                this.groups = [];
            }
            else {
                var childGroup = this.groups[this.currentGroupLevel];
                var parentGroup = this.groups[this.currentGroupLevel - 1];
                childGroup.component = require("@views/" + childGroup.layout).default;
                parentGroup.children.push(childGroup);
                this.groups.splice(this.currentGroupLevel, 1);
            }
        }
        this.currentGroupLevel--;
    };
    VueRouterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VueRouterService);
    return VueRouterService;
}());
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsaURBQTRDO0FBSTVDO0lBV0U7UUFWTyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUV0QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUc1QixhQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLG9DQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLHFDQUFVLEdBQWxCLFVBQW1CLGNBQWM7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLHNDQUFXLEdBQW5CO1FBQUEsaUJBc0JDO1FBckJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQztnQkFDTixNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU07Z0JBQ25CLGNBQWMsRUFBRSxLQUFJLENBQUMsY0FBYzthQUNwQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxJ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