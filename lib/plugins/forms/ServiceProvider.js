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
var ServiceProvider_1 = require("../../support/ServiceProvider");
var NotificationsServiceProvider = /** @class */ (function (_super) {
    __extends(NotificationsServiceProvider, _super);
    function NotificationsServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsServiceProvider.prototype.boot = function () {
        vue_1.default.use(new index_1.default());
    };
    NotificationsServiceProvider.prototype.register = function () { };
    return NotificationsServiceProvider;
}(ServiceProvider_1.default));
exports.default = NotificationsServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvZm9ybXMvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFzQjtBQUN0QixpQ0FBNEI7QUFDNUIsaUVBQTREO0FBRTVEO0lBQTBELGdEQUFlO0lBQXpFOztJQUtBLENBQUM7SUFKUSwyQ0FBSSxHQUFYO1FBQ0UsYUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQUssRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNNLCtDQUFRLEdBQWYsY0FBbUIsQ0FBQztJQUN0QixtQ0FBQztBQUFELENBQUMsQUFMRCxDQUEwRCx5QkFBZSxHQUt4RSJ9