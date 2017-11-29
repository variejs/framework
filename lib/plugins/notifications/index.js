"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var store_1 = require("./store");
var NotificationService_1 = require("./NotificationService");
var Notifications = /** @class */ (function() {
  function Notifications() {}
  Notifications.prototype.install = function(Vue, _a) {
    var _this = this;
    var store = _a.store;
    this.__config = $config.get("notifications");
    _.each(store_1.default, function(module, name) {
      store.registerModule(["varie", name], module);
    });
    this._service = new NotificationService_1.default(this.__config, store);
    Vue.component("notifications", this.__config.component);
    Vue.mixin({
      computed: {
        notificationService: function() {
          return _this._service;
        }
      }
    });
  };
  return Notifications;
})();
exports.default = Notifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9ub3RpZmljYXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTRCO0FBQzVCLGlDQUF5QztBQUV6Qyw2REFBd0Q7QUFFeEQ7SUFBQTtJQTJCQSxDQUFDO0lBbkJRLCtCQUFPLEdBQWQsVUFBZSxHQUFtQixFQUFFLEVBQVM7UUFBN0MsaUJBa0JDO1lBbEJxQyxnQkFBSztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFrQixFQUFFLFVBQUMsTUFBTSxFQUFFLElBQVk7WUFDOUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2QkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlELEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEQsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNSLFFBQVEsRUFBRTtnQkFDUixtQkFBbUIsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==
