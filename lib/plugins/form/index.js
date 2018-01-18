"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var NotificationService_1 = require("./NotificationService");
var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    Notifications.prototype.install = function (Vue, _a) {
        var _this = this;
        var store = _a.store;
        this.__config = $config.get("notifications");
        for (var name_1 in store_1.default) {
            var module_1 = store_1.default[name_1];
            store.registerModule(["varie", name_1], module_1);
        }
        this._service = new NotificationService_1.default(this.__config, store);
        Vue.component("notifications", this.__config.component);
        Vue.mixin({
            computed: {
                notificationService: function () {
                    return _this._service;
                }
            }
        });
    };
    return Notifications;
}());
exports.default = Notifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9mb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXlDO0FBRXpDLDZEQUF3RDtBQUV4RDtJQUFBO0lBNEJBLENBQUM7SUFwQlEsK0JBQU8sR0FBZCxVQUFlLEdBQW1CLEVBQUUsRUFBUztRQUE3QyxpQkFtQkM7WUFuQnFDLGdCQUFLO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3QyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQUksSUFBSSxlQUFrQixDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLFFBQU0sR0FBRyxlQUFrQixDQUFDLE1BQUksQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBSSxDQUFDLEVBQUUsUUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2QkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlELEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEQsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNSLFFBQVEsRUFBRTtnQkFDUixtQkFBbUIsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==