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
        var moduleAbstractName = camelCase("store " + this.getModuleName(filename).join(' '));
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
        __param(0, inversify_1.inject('app')),
        __metadata("design:paramtypes", [Object])
    ], VuexService);
    return VuexService;
}());
exports.default = VuexService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVleFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RhdGUvVnVleFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsNkJBQW1DO0FBQ25DLHVDQUE4QztBQUU5QyxxQ0FBdUM7QUFJdkM7SUFNRSxxQkFDaUIsR0FBMEI7UUFMbkMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFVBQUssR0FBRyxJQUFJLENBQUM7UUFNbkIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQUksQ0FBQyxLQUFLLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDaEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDVixnR0FBZ0csQ0FDakcsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsUUFBUTtRQUN4QixJQUFJLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxXQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLFFBQWlCLEVBQUUsTUFBaUI7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sbUNBQWEsR0FBckIsVUFBc0IsUUFBaUI7UUFDckMsTUFBTSxDQUFDLFFBQVE7YUFDWixPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzthQUNwQixPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUN4QixPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzthQUNsQixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzthQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQTNEa0IsV0FBVztRQUQvQixzQkFBVSxFQUFFO1FBUVIsV0FBQSxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBOztPQVBHLFdBQVcsQ0E2RC9CO0lBQUQsa0JBQUM7Q0FBQSxBQTdERCxJQTZEQztrQkE3RG9CLFdBQVcifQ==