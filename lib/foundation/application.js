"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var Application = /** @class */ (function () {
    function Application() {
        this.providers = [];
        this.$providerPromises = [];
        this.$container = new inversify_1.Container();
        global.$container = this.$container;
        this.$container.bind("app").toConstantValue(this);
    }
    Application.prototype.boot = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.registerConfiguredProviders().then(function () {
                _this.bootProviders();
                return resolve();
            });
        });
    };
    Application.prototype.registerConfiguredProviders = function () {
        var _this = this;
        var appConfig = require("@config/app").default;
        var _loop_1 = function (provider) {
            provider = appConfig.providers[provider];
            var providerPromise = new Promise(function (resolve) {
                var registering = new provider(_this).register();
                if (registering instanceof Promise) {
                    return registering.then(function () {
                        return resolve();
                    });
                }
                resolve();
            });
            this_1.$providerPromises.push(providerPromise);
        };
        var this_1 = this;
        for (var provider in appConfig.providers) {
            _loop_1(provider);
        }
        return Promise.all(this.$providerPromises);
    };
    Application.prototype.bootProviders = function () {
        for (var provider in this.providers) {
            provider = this.providers[provider];
            provider.boot();
        }
    };
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDRCQUEwQjtBQUMxQix1Q0FBc0M7QUFFdEM7SUFLRTtRQUpRLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxpREFBMkIsR0FBbkM7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQ0FFdEMsUUFBUTtZQUNmLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDdkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELEVBQUUsQ0FBQyxDQUFDLFdBQVcsWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFLLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxDQUFDOztRQVpELEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQWhDLFFBQVE7U0FZaEI7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksa0NBQVcifQ==