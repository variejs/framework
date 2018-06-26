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
var camelCase = require("camelcase");
var ServiceProvider_1 = require("../../support/ServiceProvider");
var CommonServiceProvider = /** @class */ (function (_super) {
    __extends(CommonServiceProvider, _super);
    function CommonServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonServiceProvider.prototype.register = function () { };
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
        return camelCase(filename.replace(".ts", ""));
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyRmlsdGVycy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLHFDQUF1QztBQUN2QyxpRUFBNEQ7QUFFNUQ7SUFBbUQseUNBQWU7SUFBbEU7O0lBbUJBLENBQUM7SUFsQlEsd0NBQVEsR0FBZixjQUFtQixDQUFDO0lBRWIsb0NBQUksR0FBWDtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxPQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDdkUsT0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQzNCLGFBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEdBQTRHLENBQzdHLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVPLDZDQUFhLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBbkJELENBQW1ELHlCQUFlLEdBbUJqRSJ9