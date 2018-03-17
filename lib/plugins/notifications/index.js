"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    Notifications.prototype.install = function (Vue, _a) {
        var store = _a.store, service = _a.service;
        this.__config = $config.get("notifications");
        for (var name_1 in store_1.default) {
            var module_1 = store_1.default[name_1];
            store.registerModule(["varie", name_1], module_1);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9ub3RpZmljYXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXlDO0FBSXpDO0lBQUE7SUF5QkEsQ0FBQztJQW5CUSwrQkFBTyxHQUFkLFVBQWUsR0FBbUIsRUFBRSxFQUFrQjtZQUFoQixnQkFBSyxFQUFFLG9CQUFPO1FBRWxELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3QyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQUksSUFBSSxlQUFrQixDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLFFBQU0sR0FBRyxlQUFrQixDQUFDLE1BQUksQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBSSxDQUFDLEVBQUUsUUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEQsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNSLFFBQVEsRUFBRTtnQkFDUixtQkFBbUIsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9