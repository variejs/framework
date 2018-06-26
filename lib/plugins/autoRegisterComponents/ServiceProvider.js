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
var dashify = require("dashify");
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
            var files_1 = require.context("@components", true, /^\.\/.*\.(vue)$/);
            files_1.keys().forEach(function (filename) {
                vue_1.default.component(_this.getComponentName(filename), files_1(filename).default);
            });
        }
        catch (e) {
            console.warn("You are trying to auto load components, but do not have a component folder, please create `app/components` folder.");
        }
    };
    CommonServiceProvider.prototype.getComponentName = function (filename) {
        return dashify(filename.replace(".vue", ""));
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyQ29tcG9uZW50cy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQXNCO0FBQ3RCLGlDQUFtQztBQUNuQyxpRUFBNEQ7QUFFNUQ7SUFBbUQseUNBQWU7SUFBbEU7O0lBbUJBLENBQUM7SUFsQlEsd0NBQVEsR0FBZixjQUFtQixDQUFDO0lBRWIsb0NBQUksR0FBWDtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxPQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDcEUsT0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQzNCLGFBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FDVixvSEFBb0gsQ0FDckgsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRU8sZ0RBQWdCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBbkJELENBQW1ELHlCQUFlLEdBbUJqRSJ9