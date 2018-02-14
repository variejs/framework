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
            this.groups[this.currentGroupLevel].children.push(route);
            return route;
        }
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
        this.groupInfo.path = path;
        var groupInfo = JSON.parse(JSON.stringify(this.groupInfo));
        this.groups.push(groupInfo);
        this.currentGroupLevel++;
        routes();
        this._resetGroup();
        return this;
    };
    VueRouterService.prototype.template = function (template) {
        this.groupInfo.component = require("@views/" + template);
        return this;
    };
    VueRouterService.prototype.prefix = function (prefix) {
        this.groupInfo.path = prefix;
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
            meta: {
                middleware: [],
            },
            component: null,
            children: [],
        };
        if (this.currentGroupLevel === -1 && this.groups.length) {
            for (var groupIndex = this.groups.length - 1; groupIndex > 0; groupIndex--) {
                this.groups[groupIndex - 1].children = [this.groups[groupIndex]];
            }
            this.routes.push(this.groups[0]);
        }
    };
    VueRouterService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VueRouterService);
    return VueRouterService;
}());
exports.default = VueRouterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlUm91dGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0aW5nL1Z1ZVJvdXRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUNBQTRCO0FBQzVCLHlDQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsaURBQTRDO0FBUTVDO0lBUUU7UUFQTyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVVYLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQVI1QixhQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLG9DQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUlPLHNDQUFXLEdBQW5CO1FBQUEsaUJBVUM7UUFUQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcs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