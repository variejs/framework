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
            var files_1 = require.context("@app/mixins", true, /^\.\/.*\.(ts|js)$/);
            files_1.keys().forEach(function (filename) {
                vue_1.default.mixin(files_1(filename));
            });
        }
        catch (e) {
            console.warn("You are trying to auto load mixins, but do not have a mixins folder, please create `app/mixins` folder.");
        }
    };
    return CommonServiceProvider;
}(ServiceProvider_1.default));
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvYXV0b1JlZ2lzdGVyTWl4aW5zL1NlcnZpY2VQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQkFBc0I7QUFDdEIsaUVBQTREO0FBRTVEO0lBQW1ELHlDQUFlO0lBQWxFOztJQWtCQSxDQUFDO0lBaEJRLHdDQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sb0NBQUksR0FBWDtRQUNFLElBQUksQ0FBQztZQUNILElBQUksT0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RFLE9BQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUMzQixhQUFHLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUNWLHlHQUF5RyxDQUMxRyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFsQkQsQ0FBbUQseUJBQWUsR0FrQmpFIn0=