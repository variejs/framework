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
var kebab_case_1 = require("kebab-case");
var ServiceProvider_1 = require("../../support/ServiceProvider");
var CommonServiceProvider = /** @class */ (function (_super) {
    __extends(CommonServiceProvider, _super);
    function CommonServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonServiceProvider.prototype.register = function () {
    };
    CommonServiceProvider.prototype.boot = function () {
        var _this = this;
        try {
            var files_1 = require.context("@components", true, /^\.\/.*\.(vue)$/);
            files_1.keys().forEach(function (filename) {
                vue_1.default.component(_this.getComponentName(filename), files_1(filename));
            });
        }
        catch (e) {
            console.warn("You are trying to auto load components, but do not have a component folder, please create `app/components` folder.");
        }
    };
    CommonServiceProvider.prototype.getComponentName = function (filename) {
        return kebab_case_1.default(filename.replace(".vue", ""));
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyQ29tcG9uZW50cy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLHlDQUFtQztBQUNuQyxpRUFBNEQ7QUFFNUQ7SUFBbUQseUNBQWU7SUFBbEU7O0lBdUJBLENBQUM7SUFyQlEsd0NBQVEsR0FBZjtJQUVBLENBQUM7SUFFTSxvQ0FBSSxHQUFYO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUM7WUFDSCxJQUFJLE9BQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUNwRSxPQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDM0IsYUFBRyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQ1Ysb0hBQW9ILENBQ3JILENBQUM7UUFDSixDQUFDO0lBRUgsQ0FBQztJQUVPLGdEQUFnQixHQUF4QixVQUF5QixRQUFnQjtRQUN2QyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUF2QkQsQ0FBbUQseUJBQWUsR0F1QmpFIn0=