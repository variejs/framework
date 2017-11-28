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
var ServiceProvider_1 = require("../../support/ServiceProvider");
var CommonServiceProvider = /** @class */ (function (_super) {
    __extends(CommonServiceProvider, _super);
    function CommonServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonServiceProvider.prototype.register = function () {
    };
    CommonServiceProvider.prototype.boot = function () {
        try {
            var files_1 = require.context("@app/directives", true, /^\.\/.*\.(ts|js)$/);
            files_1.keys().forEach(function (filename) {
                files_1(filename);
            });
        }
        catch (e) {
            console.warn("You are trying to auto load directives, but do not have a directives folder, please create `app/directives` folder.");
        }
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyRGlyZWN0aXZlcy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQTREO0FBRTVEO0lBQW1ELHlDQUFlO0lBQWxFOztJQWtCQSxDQUFDO0lBaEJRLHdDQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sb0NBQUksR0FBWDtRQUNFLElBQUksQ0FBQztZQUNILElBQUksT0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDMUUsT0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQzNCLE9BQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsQ0FDdEgsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBbEJELENBQW1ELHlCQUFlLEdBa0JqRSJ9