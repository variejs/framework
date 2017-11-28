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
var vuex_1 = require("vuex");
var inversify_1 = require("inversify");
var VuexService = /** @class */ (function () {
    function VuexService() {
        this.store = null;
        this.files = null;
        vue_1.default.use(vuex_1.default);
        this.store = new vuex_1.default.Store({});
        this.store = this.buildModules();
        this.store.registerModule("varie", {
            namespaced: true
        });
    }
    VuexService.prototype.getStore = function () {
        return this.store;
    };
    VuexService.prototype.buildModules = function () {
        var _this = this;
        try {
            this.files = require.context("@store", true, /^\.\/.*index\.(ts)$/);
            this.files.keys().forEach(function (filename) {
                _this.createStore(filename, _this.getModule(filename));
            });
        }
        catch (e) {
            console.warn("You have loaded the store module without having a store folder, please add `app/store` folder!");
        }
        return this.store;
    };
    VuexService.prototype.getModule = function (filename) {
        var module = this.files(filename).default;
        module.modules = {};
        module.namespaced = true;
        return module;
    };
    VuexService.prototype.createStore = function (filename, module) {
        this.store.registerModule(filename
            .replace(/^\.\//, "")
            .replace(/index\.ts/, "")
            .replace(/index\.js/, "")
            .replace(/\/$/, "")
            .replace(/modules\//g, "")
            .split("/"), module);
    };
    VuexService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VuexService);
    return VuexService;
}());
exports.default = VuexService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVleFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RhdGUvVnVleFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsNkJBQW1DO0FBQ25DLHVDQUF1QztBQUl2QztJQUlFO1FBSFEsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHbkIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxjQUFJLENBQUMsS0FBSyxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUNqQyxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FDVixnR0FBZ0csQ0FDakcsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsUUFBUTtRQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFvQixRQUFRLEVBQUUsTUFBTTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDdkIsUUFBUTthQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDYixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFsRGtCLFdBQVc7UUFEL0Isc0JBQVUsRUFBRTs7T0FDUSxXQUFXLENBbUQvQjtJQUFELGtCQUFDO0NBQUEsQUFuREQsSUFtREM7a0JBbkRvQixXQUFXIn0=