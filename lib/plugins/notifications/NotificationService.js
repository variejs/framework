"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationService = /** @class */ (function () {
    function NotificationService() {
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
        console.info('this wont work');
        this.__store.dispatch("varie/notifications/add", {
            message: message,
            duration: duration,
            severity: severity,
        });
    };
    return NotificationService;
}());
exports.default = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7SUF3Q0EsQ0FBQztJQWpDUSx1Q0FBUyxHQUFoQixVQUFpQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLHNDQUFRLEdBQWYsVUFBZ0IsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sd0NBQVUsR0FBbEIsVUFDRSxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWlCLEVBQ2pCLFFBQWlCO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFO1lBQy9DLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBRW5CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9