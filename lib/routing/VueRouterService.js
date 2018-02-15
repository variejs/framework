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
var camelCase = require("camelcase");
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
            var groups = [];
            wildCardRoutes.forEach(function (route) {
                groups = JSON.parse(JSON.stringify(route.groups));
                groups.forEach(function (group) {
                    group.children = [];
                    group.component = require("@views/" + group.layout);
                });
                groups[route.groupLevel].children.push(route);
                for (var groupIndex = route.groupLevel; groupIndex > 0; groupIndex--) {
                    groups[groupIndex - 1].children.push(groups[groupIndex]);
                }
            });
            routes.push(groups[0]);
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
                route.groups = this.groups;
                route.groupLevel = this.currentGroupLevel;
                this.wildCardRoutes.push(route);
            }
            else {
                this.groups[this.currentGroupLevel].children.push(route);
            }
            var tempName = "";
            var groupIndex = this.currentGroupLevel;
            for (groupIndex; groupIndex > -1; groupIndex--) {
                tempName = this.groups[groupIndex].path + " " + tempName;
            }
            tempName = tempName + " " + route.path;
            route.setName(camelCase(tempName.replace(/\//g, "")));
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
        route.setName(camelCase(route.path.replace(/\/g/, " ")));
        return route;
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
    VueRouterService.prototype.group = function (path, routes) {
        this.groupInfo.path = path;
        if (this.currentGroupLevel > -1) {
            this.groupInfo.path = this.groupInfo.path.replace(/^\/*/g, "");
        }
        this.groups.push(JSON.parse(JSON.stringify(this.groupInfo)));
        this.currentGroupLevel++;
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
        this.currentGroupLevel--;
        this.groupInfo = {
            meta: {
                middleware: []
            },
            layout: null,
            children: []
        };
        if (this.currentGroupLevel === -1 && this.groups.length) {
            this.groups.forEach(function (group) {
                group.component = require("@views/" + group.layout);
            });
            for (var groupIndex = this.groups.length - 1; groupIndex > 0; groupIndex--) {
                this.groups[groupIndex - 1].children.push(this.groups[groupIndex]);
            }
            this.routes.push(this.groups[0]);
            this.groups = [];
        }
    };
    VueRouterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VueRouterService);
    return VueRouterService;
}());
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyxxQ0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLGlEQUE0QztBQUk1QztJQVdFO1FBVk8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdULFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHNUIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxxQ0FBVSxHQUFsQixVQUFtQixjQUFjO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxzQ0FBVyxHQUFuQjtRQUFBLGlCQThCQztRQTdCQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUM7Z0JBQ04sTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO2dCQUNuQixjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWM7YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FB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