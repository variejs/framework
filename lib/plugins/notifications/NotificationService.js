"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var NotificationService = /** @class */ (function () {
    function NotificationService(config, store) {
        this.__store = store;
        this.__config = _.merge(this.__config, config);
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
            title: !_.isEmpty(title) ? title : _.startCase(_.toLower(severity)) + "!!"
        });
    };
    return NotificationService;
}());
exports.default = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUE0QjtBQUc1QjtJQU9FLDZCQUFZLE1BQWMsRUFBRSxLQUFvQjtRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sdUNBQVMsR0FBaEIsVUFBaUIsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxzQ0FBUSxHQUFmLFVBQWdCLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHdDQUFVLEdBQWxCLFVBQ0UsT0FBZSxFQUNmLEtBQWEsRUFDYixRQUFpQixFQUNqQixRQUFpQjtRQUVqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFO1lBQy9DLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQUk7U0FDM0UsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQUVELGtCQUFlLG1CQUFtQixDQUFDIn0=