"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notifications_1 = require("./store/notifications");
var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    Notifications.prototype.install = function (Vue, _a) {
        var store = _a.store, service = _a.service;
        this.__config = $config.get("notifications");
        store.registerModule(["varie", "notifications"], new notifications_1.default());
        Vue.component("notifications", this.__config.component);
        Vue.mixin({
            computed: {
                notificationService: function () {
                    return service;
                }
            }
        });
    };
    return Notifications;
}());
exports.default = Notifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9ub3RpZmljYXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQXNEO0FBR3REO0lBQUE7SUFxQkEsQ0FBQztJQWZRLCtCQUFPLEdBQWQsVUFBZSxHQUFtQixFQUFFLEVBQWtCO1lBQWhCLGdCQUFLLEVBQUUsb0JBQU87UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTdDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLEVBQUUsSUFBSSx1QkFBaUIsRUFBRSxDQUFDLENBQUM7UUFFMUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4RCxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLG1CQUFtQixFQUFFO29CQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNqQixDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=