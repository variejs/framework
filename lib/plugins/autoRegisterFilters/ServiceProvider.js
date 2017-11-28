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
var camelCase_1 = require("camelCase");
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
            var files_1 = require.context("@app/filters", true, /^\.\/.*\.(ts|js)$/);
            files_1.keys().forEach(function (filename) {
                vue_1.default.filter(_this.getFilterName(filename), files_1(filename).default);
            });
        }
        catch (e) {
            console.warn("You are trying to auto load filters, but do not have a filters folder, please create `app/filters` folder.");
        }
    };
    CommonServiceProvider.prototype.getFilterName = function (filename) {
        return camelCase_1.default(filename.replace(".ts", ""));
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyRmlsdGVycy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLHVDQUFrQztBQUNsQyxpRUFBNEQ7QUFFNUQ7SUFBbUQseUNBQWU7SUFBbEU7O0lBc0JBLENBQUM7SUFwQlEsd0NBQVEsR0FBZjtJQUVBLENBQUM7SUFFTSxvQ0FBSSxHQUFYO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUM7WUFDSCxJQUFJLE9BQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxPQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDM0IsYUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FDViw0R0FBNEcsQ0FDN0csQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRU8sNkNBQWEsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsTUFBTSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBdEJELENBQW1ELHlCQUFlLEdBc0JqRSJ9