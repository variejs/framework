"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationService = /** @class */ (function () {
    function NotificationService(config, store) {
        this.__store = store;
        this.__config = config;
    }
    NotificationService.prototype.showError = function (message, title, duration) {
        this._makeAlert(message, title, duration, "error");
    };
    NotificationService.prototype.showInfo = function (message, title, duration) {
        this._makeAlert(message, title, duration, "info");
    };
    NotificationService.prototype.showSuccess = function (message, title, duration) {
        this._makeAlert(message, title, duration, "success");
    };
    NotificationService.prototype.showWarning = function (message, title, duration) {
        this._makeAlert(message, title, duration, "warning");
    };
    NotificationService.prototype._makeAlert = function (message, title, duration, severity) {
        if (duration === undefined) {
            duration = this.__config.duration;
        }
        this.__store.dispatch("varie/notifications/add", {
            message: message,
            duration: duration,
            severity: severity,
            title: title ? title : severity + "!!"
        });
    };
    return NotificationService;
}());
exports.default = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL05vdGlmaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNFLDZCQUFZLE1BQU0sRUFBRSxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFJTSx1Q0FBUyxHQUFoQixVQUFpQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLHNDQUFRLEdBQWYsVUFBZ0IsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sd0NBQVUsR0FBbEIsVUFDRSxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWlCLEVBQ2pCLFFBQWlCO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUU7WUFDL0MsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSxRQUFRLE9BQUk7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQUVELGtCQUFlLG1CQUFtQixDQUFDIn0=