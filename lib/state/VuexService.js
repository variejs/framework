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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var inversify_1 = require("inversify");
var camelCase = require("camelcase");
var VuexService = /** @class */ (function () {
    function VuexService(app) {
        this.store = null;
        this.files = null;
        vue_1.default.use(vuex_1.default);
        this.app = app;
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
            console.warn(e);
            console.warn("You have loaded the store module without having a store folder, please add `app/store` folder!");
        }
        return this.store;
    };
    VuexService.prototype.getModule = function (filename) {
        var moduleAbstractName = camelCase("store " + this.getModuleName(filename).join(" "));
        $app.$container.bind(moduleAbstractName).to(this.files(filename).default);
        var module = this.app.make(moduleAbstractName);
        module.modules = {};
        module.namespaced = true;
        return module;
    };
    VuexService.prototype.createStore = function (filename, module) {
        this.store.registerModule(this.getModuleName(filename), module);
    };
    VuexService.prototype.getModuleName = function (filename) {
        return filename
            .replace(/^\.\//, "")
            .replace(/index\.ts/, "")
            .replace(/index\.js/, "")
            .replace(/\/$/, "")
            .replace(/modules\//g, "")
            .split("/");
    };
    VuexService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("app")),
        __metadata("design:paramtypes", [Object])
    ], VuexService);
    return VuexService;
}());
exports.default = VuexService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVleFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RhdGUvVnVleFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsNkJBQW1DO0FBQ25DLHVDQUErQztBQUUvQyxxQ0FBdUM7QUFJdkM7SUFLRSxxQkFBMkIsR0FBeUI7UUFKNUMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFVBQUssR0FBRyxJQUFJLENBQUM7UUFJbkIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQUksQ0FBQyxLQUFLLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDaEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0dBQWdHLENBQ2pHLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLFFBQVE7UUFDeEIsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQ2hDLFdBQVMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQ2xELENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxNQUFnQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxtQ0FBYSxHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxNQUFNLENBQUMsUUFBUTthQUNaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBMURrQixXQUFXO1FBRC9CLHNCQUFVLEVBQUU7UUFNRSxXQUFBLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7O09BTFAsV0FBVyxDQTJEL0I7SUFBRCxrQkFBQztDQUFBLEFBM0RELElBMkRDO2tCQTNEb0IsV0FBVyJ9