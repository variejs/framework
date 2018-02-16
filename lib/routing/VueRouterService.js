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
            // TODO - will have to redo these
            // if (wildCardRoutes.length) {
            //   let groups = [];
            //
            //   wildCardRoutes.forEach(route => {
            //     if (route.groups) {
            //       groups = JSON.parse(JSON.stringify(route.groups));
            //
            //       groups.forEach(group => {
            //         group.children = [];
            //         group.component = require(`@views/${group.layout}`).default;
            //       });
            //
            //       groups[route.groupLevel].children.push(route);
            //
            //       for (
            //         let groupIndex = route.groupLevel;
            //         groupIndex > 0;
            //         groupIndex--
            //       ) {
            //         groups[groupIndex - 1].children.push(groups[groupIndex]);
            //       }
            //     } else {
            //       routes.push(route);
            //     }
            //   });
            //
            //   if (groups.length) {
            //     routes.push(groups[0]);
            //   }
            // }
            var routes = _a.routes, wildCardRoutes = _a.wildCardRoutes;
            console.info(routes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyxxQ0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLGlEQUE0QztBQUk1QztJQVdFO1FBVk8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdULFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHNUIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxxQ0FBVSxHQUFsQixVQUFtQixjQUFjO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxzQ0FBVyxHQUFuQjtRQUFBLGlCQTZDQztRQTVDQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUM7Z0JBQ04sTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO2dCQUNuQixjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWM7YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FB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