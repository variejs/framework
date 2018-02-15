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
            resolve(_this.routes);
        }).then(function (routes) {
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
            this.groups[this.currentGroupLevel].children.push(route);
            var tempName = "";
            var groupIndex = this.currentGroupLevel;
            for (groupIndex; groupIndex > -1; groupIndex--) {
                tempName = this.groups[groupIndex].path + " " + tempName;
            }
            tempName = tempName + " " + route.path;
            route.setName(camelCase(tempName.replace(/\//g, "")));
            return route;
        }
        this.routes.push(route);
        route.setName(camelCase(route.path.replace(/\/g/, " ")));
        return route;
    };
    VueRouterService.prototype.middleware = function (middleware) {
        this.groupInfo.middleware = this.groupInfo.middleware.concat(middleware);
        return this;
    };
    VueRouterService.prototype.redirect = function (path, redirect) {
        // TODO - we need to use the same logic as in route
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
    VueRouterService.prototype.template = function (template) {
        this.groupInfo.component = template;
        return this;
    };
    VueRouterService.prototype.prefix = function (prefix) {
        this.groupInfo.path = prefix;
        return this;
    };
    // TODO - need to test to test
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
            meta: {
                middleware: []
            },
            component: null,
            children: []
        };
        if (this.currentGroupLevel === -1 && this.groups.length) {
            this.groups.forEach(function (group) {
                group.component = require("@views/" + group.component);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyxxQ0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLGlEQUE0QztBQUk1QztJQVNFO1FBUk8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdULFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFHOUIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxxQ0FBVSxHQUFsQixVQUFtQixjQUFjO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxzQ0FBVyxHQUFuQjtRQUFBLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7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