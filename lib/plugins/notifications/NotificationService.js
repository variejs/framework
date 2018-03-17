"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vuex_1 = require("vuex");
var inversify_1 = require("inversify");
var NotificationService = /** @class */ (function () {
    function NotificationService($config, $store) {
        this.__config = $config;
        this.__store = $store.getStore();
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
    NotificationService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("$config")),
        __param(1, inversify_1.inject("$store")),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof vuex_1.Store !== "undefined" && vuex_1.Store) === "function" && _a || Object])
    ], NotificationService);
    return NotificationService;
    var _a;
}());
exports.default = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3Qix1Q0FBK0M7QUFJL0M7SUFJRSw2QkFDcUIsT0FBd0IsRUFDekIsTUFBYTtRQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sdUNBQVMsR0FBaEIsVUFBaUIsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxzQ0FBUSxHQUFmLFVBQWdCLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLEtBQWEsRUFBRSxRQUFpQjtRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsS0FBYSxFQUFFLFFBQWlCO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHdDQUFVLEdBQWxCLFVBQ0UsT0FBZSxFQUNmLEtBQWEsRUFDYixRQUFpQixFQUNqQixRQUFpQjtRQUVqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFO1lBQy9DLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksUUFBUSxPQUFJO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Q0csbUJBQW1CO1FBRHhCLHNCQUFVLEVBQUU7UUFNUixXQUFBLGtCQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDakIsV0FBQSxrQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3FFQUFTLFlBQUssb0JBQUwsWUFBSztPQU43QixtQkFBbUIsQ0E2Q3hCO0lBQUQsMEJBQUM7O0NBQUEsQUE3Q0QsSUE2Q0M7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9