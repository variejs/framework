"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var _ = require("lodash");
var inversify_1 = require("inversify");
var Application = /** @class */ (function() {
  function Application() {
    this.providers = [];
    this.$providerPromises = [];
    this.$container = new inversify_1.Container();
    global.$container = this.$container;
    this.$container.bind("app").toConstantValue(this);
  }
  Application.prototype.boot = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.registerConfiguredProviders().then(function() {
        _this.bootProviders();
        return resolve();
      });
    });
  };
  Application.prototype.registerConfiguredProviders = function() {
    var _this = this;
    var appConfig = require("@config/app").default;
    _.each(appConfig.providers, function(provider) {
      var providerPromise = new Promise(function(resolve) {
        var registering = new provider(_this).register();
        if (registering instanceof Promise) {
          return registering.then(function() {
            return resolve();
          });
        }
        resolve();
      });
      _this.$providerPromises.push(providerPromise);
    });
    return Promise.all(this.$providerPromises);
  };
  Application.prototype.bootProviders = function() {
    _.each(this.providers, function(provider) {
      provider.boot();
    });
  };
  return Application;
})();
exports.Application = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDRCQUEwQjtBQUMxQiwwQkFBNEI7QUFDNUIsdUNBQXNDO0FBRXRDO0lBS0U7UUFKUSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUFBLGlCQU9DO1FBTkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saURBQTJCLEdBQW5DO1FBQUEsaUJBZUM7UUFkQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFBLFFBQVE7WUFDbEMsSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLENBQUMsV0FBVyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO3dCQUN0QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQSxRQUFRO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksa0NBQVcifQ==
