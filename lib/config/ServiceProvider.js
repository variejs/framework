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
        $container
            .bind("$config")
            .to(ConfigService_1.default)
            .inSingletonScope();
        global.$config = $container.get("$config");
    };
    return ConfigServiceProvider;
}(ServiceProvider_1.default));
exports.default = ConfigServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBR3pELGlEQUE0QztBQUc1QztJQUFtRCx5Q0FBZTtJQUFsRTs7SUFRQSxDQUFDO0lBUFEsd0NBQVEsR0FBZjtRQUNFLFVBQVU7YUFDUCxJQUFJLENBQWtCLFNBQVMsQ0FBQzthQUNoQyxFQUFFLENBQUMsdUJBQWEsQ0FBQzthQUNqQixnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBbUQseUJBQWUsR0FRakUifQ==