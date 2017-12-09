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
var ServiceProvider_1 = require("../support/ServiceProvider");
var ConfigService_1 = require("./ConfigService");
var ConfigServiceProvider = /** @class */ (function (_super) {
    __extends(ConfigServiceProvider, _super);
    function ConfigServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfigServiceProvider.prototype.register = function () {
        this.app.singleton("$config", ConfigService_1.default);
        global.$config = this.app.make("$config");
    };
    return ConfigServiceProvider;
}(ServiceProvider_1.default));
exports.default = ConfigServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBR3pELGlEQUE0QztBQUc1QztJQUFtRCx5Q0FBZTtJQUFsRTs7SUFLQSxDQUFDO0lBSlEsd0NBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFrQixTQUFTLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1ELHlCQUFlLEdBS2pFIn0=