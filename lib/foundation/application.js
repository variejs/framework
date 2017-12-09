"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerMixin_1 = require("./ContainerMixin");
require("reflect-metadata");
var inversify_1 = require("inversify");
var Application = /** @class */ (function () {
    function Application() {
        this.providers = [];
        this.$providerPromises = [];
        this.$container = new inversify_1.Container();
        this.$container.bind("app").toConstantValue(this);
        global.$app = this;
    }
    Application.prototype.boot = function () {
        var _this = this;
        new ContainerMixin_1.default().registerMixin(this);
        return new Promise(function (resolve) {
            _this.registerConfiguredProviders().then(function () {
                _this.bootProviders();
                return resolve(_this);
            });
        });
    };
    Application.prototype.bind = function (abstract, concrete) {
        this.$container.bind(abstract).to(concrete);
    };
    Application.prototype.singleton = function (abstract, concrete) {
        this.$container
            .bind(abstract)
            .to(concrete)
            .inSingletonScope();
    };
    Application.prototype.make = function (abstract) {
        return this.$container.get(abstract);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLG1EQUE4QztBQUM5Qyw0QkFBMEI7QUFDMUIsdUNBQXNDO0FBRXRDO0lBS0U7UUFKUSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQUEsaUJBU0M7UUFSQyxJQUFJLHdCQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBZSxRQUFnQixFQUFFLFFBQWE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFvQixRQUFnQixFQUFFLFFBQWE7UUFDakQsSUFBSSxDQUFDLFVBQVU7YUFDWixJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNaLGdCQUFnQixFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBZSxRQUFnQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLGlEQUEyQixHQUFuQztRQUFBLGlCQWlCQztRQWhCQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO2dDQUV0QyxRQUFRO1lBQ2YsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLENBQUMsV0FBVyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUN0QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztZQUNILE9BQUssaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7O1FBWkQsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQztvQkFBaEMsUUFBUTtTQVloQjtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxtQ0FBYSxHQUFyQjtRQUNFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQztBQTlEWSxrQ0FBVyJ9