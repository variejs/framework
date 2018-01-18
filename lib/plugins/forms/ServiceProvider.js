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
var FormsPlugin_1 = require("./FormsPlugin");
var ServiceProvider_1 = require("../../support/ServiceProvider");
var NotificationsServiceProvider = /** @class */ (function (_super) {
    __extends(NotificationsServiceProvider, _super);
    function NotificationsServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsServiceProvider.prototype.boot = function () {
        vue_1.default.use(this.app.make("$FormsPlugin"));
    };
    NotificationsServiceProvider.prototype.register = function () {
        this.app.singleton("$FormsPlugin", FormsPlugin_1.default);
    };
    return NotificationsServiceProvider;
}(ServiceProvider_1.default));
exports.default = NotificationsServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvZm9ybXMvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFzQjtBQUN0Qiw2Q0FBd0M7QUFDeEMsaUVBQTREO0FBRTVEO0lBQTBELGdEQUFlO0lBQXpFOztJQU9BLENBQUM7SUFOUSwyQ0FBSSxHQUFYO1FBQ0UsYUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSwrQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLHFCQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBMEQseUJBQWUsR0FPeEUifQ==