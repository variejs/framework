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
var config_1 = require("./config");
var ServiceProvider_1 = require("../support/ServiceProvider");
var VarieValidationService_1 = require("./VarieValidationService");
var RoutingServiceProvider = /** @class */ (function (_super) {
    __extends(RoutingServiceProvider, _super);
    function RoutingServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutingServiceProvider.prototype.boot = function () {
        require("./directive/Validate");
    };
    RoutingServiceProvider.prototype.register = function () {
        this.mergeConfigFrom(config_1.default, "validation");
        var files = require.context("@resources/lang", true, /validation\.(ts)$/);
        for (var _i = 0, _a = files.keys(); _i < _a.length; _i++) {
            var filename = _a[_i];
            $config.set("validation." + filename
                .replace("./", "")
                .split("/")
                .shift(), files(filename).default);
        }
        this.app.singleton("$validator", VarieValidationService_1.default);
    };
    return RoutingServiceProvider;
}(ServiceProvider_1.default));
exports.default = RoutingServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUF3QztBQUN4Qyw4REFBeUQ7QUFDekQsbUVBQThEO0FBRzlEO0lBQW9ELDBDQUFlO0lBQW5FOztJQXlCQSxDQUFDO0lBeEJRLHFDQUFJLEdBQVg7UUFDRSxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0seUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFckQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUxRSxHQUFHLENBQUMsQ0FBaUIsVUFBWSxFQUFaLEtBQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FDVCxnQkFBYyxRQUFRO2lCQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztpQkFDakIsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixLQUFLLEVBQUksRUFDWixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUN4QixDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsWUFBWSxFQUNaLGdDQUFzQixDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFvRCx5QkFBZSxHQXlCbEUifQ==