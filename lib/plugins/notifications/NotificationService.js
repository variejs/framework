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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUUsNkJBQVksTUFBTSxFQUFFLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUlNLHVDQUFTLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sc0NBQVEsR0FBZixVQUFnQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyx3Q0FBVSxHQUFsQixVQUNFLE9BQWUsRUFDZixLQUFhLEVBQ2IsUUFBaUIsRUFDakIsUUFBaUI7UUFFakIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtZQUMvQyxPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLFFBQVEsT0FBSTtTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBRUQsa0JBQWUsbUJBQW1CLENBQUMifQ==