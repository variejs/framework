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
        var files = require.context("@resources/lang", true, /validation\.(ts)$/);
        for (var _i = 0, _a = files.keys(); _i < _a.length; _i++) {
            var filename = _a[_i];
            $config.set("validation." + filename.replace('./', '').split('/').shift(), files(filename).default);
        }
        this.app.singleton("$validator", VarieValidationService_1.default);
    };
    return RoutingServiceProvider;
}(ServiceProvider_1.default));
exports.default = RoutingServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCxtRUFBOEQ7QUFHOUQ7SUFBb0QsMENBQWU7SUFBbkU7O0lBa0JBLENBQUM7SUFqQlEscUNBQUksR0FBWDtRQUNFLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSx5Q0FBUSxHQUFmO1FBRUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUxRSxHQUFHLENBQUMsQ0FBaUIsVUFBWSxFQUFaLEtBQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JHO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFlBQVksRUFDWixnQ0FBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFsQkQsQ0FBb0QseUJBQWUsR0FrQmxFIn0=