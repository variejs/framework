"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var index_1 = require("./index");
var config_1 = require("./config");
var ServiceProvider_1 = require("../../support/ServiceProvider");
var NotificationsServiceProvider = /** @class */ (function (_super) {
    __extends(NotificationsServiceProvider, _super);
    function NotificationsServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsServiceProvider.prototype.boot = function () {
        vue_1.default.use(new index_1.default(), {
            store: this.app.make("$store").getStore()
        });
    };
    NotificationsServiceProvider.prototype.register = function () {
        this.mergeConfigFrom(config_1.default, "notifications");
    };
    return NotificationsServiceProvider;
}(ServiceProvider_1.default));
exports.default = NotificationsServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvbm90aWZpY2F0aW9ucy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLGlDQUFvQztBQUNwQyxtQ0FBMkM7QUFDM0MsaUVBQTREO0FBRTVEO0lBQTBELGdEQUFlO0lBQXpFOztJQVVBLENBQUM7SUFUUSwyQ0FBSSxHQUFYO1FBQ0UsYUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQWEsRUFBRSxFQUFFO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFWRCxDQUEwRCx5QkFBZSxHQVV4RSJ9