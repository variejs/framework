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
        _.each(store_1.default, function (module, name) {
            store.registerModule(["varie", name], module);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9ub3RpZmljYXRpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXlDO0FBRXpDLDZEQUF3RDtBQUV4RDtJQUFBO0lBMkJBLENBQUM7SUFuQlEsK0JBQU8sR0FBZCxVQUFlLEdBQW1CLEVBQUUsRUFBUztRQUE3QyxpQkFrQkM7WUFsQnFDLGdCQUFLO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3QyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWtCLEVBQUUsVUFBQyxNQUFNLEVBQUUsSUFBWTtZQUM5QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDZCQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4RCxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLG1CQUFtQixFQUFFO29CQUNuQixNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9