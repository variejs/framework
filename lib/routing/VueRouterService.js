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
            if (wildCardRoutes.length) {
                var groups_1 = [];
                wildCardRoutes.forEach(function (route) {
                    if (route.groups) {
                        groups_1 = JSON.parse(JSON.stringify(route.groups));
                        groups_1.forEach(function (group) {
                            group.children = [];
                            group.component = require("@views/" + group.layout);
                        });
                        groups_1[route.groupLevel].children.push(route);
                        for (var groupIndex = route.groupLevel; groupIndex > 0; groupIndex--) {
                            groups_1[groupIndex - 1].children.push(groups_1[groupIndex]);
                        }
                    }
                    else {
                        routes.push(route);
                    }
                });
                if (groups_1.length) {
                    routes.push(groups_1[0]);
                }
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
    VueRouterService.prototype.group = function (routes) {
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
        this.currentGroupLevel--;
        this.groupInfo = {
            path: "/",
            meta: {
                middleware: []
            },
            layout: null,
            children: []
        };
        if (this.currentGroupLevel === -1 && this.groups.length) {
            this.groups.forEach(function (group) {
                group.component = require("@views/" + group.layout).default;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyxxQ0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLGlEQUE0QztBQUk1QztJQVdFO1FBVk8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdULFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHNUIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxxQ0FBVSxHQUFsQixVQUFtQixjQUFjO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxzQ0FBVyxHQUFuQjtRQUFBLGlCQTJDQztRQTFDQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUM7Z0JBQ04sTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO2dCQUNuQixjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWM7YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FB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