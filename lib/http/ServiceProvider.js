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
var AxiosHttpService_1 = require("./AxiosHttpService");
var ServiceProvider_1 = require("../support/ServiceProvider");
var RoutingServiceProvider = /** @class */ (function (_super) {
    __extends(RoutingServiceProvider, _super);
    function RoutingServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutingServiceProvider.prototype.boot = function () {
    };
    RoutingServiceProvider.prototype.register = function () {
        this.mergeConfigFrom(config_1.default, "http");
        this.app.singleton("$http", AxiosHttpService_1.default);
    };
    return RoutingServiceProvider;
}(ServiceProvider_1.default));
exports.default = RoutingServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2h0dHAvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyx1REFBa0Q7QUFDbEQsOERBQXlEO0FBR3pEO0lBQW9ELDBDQUFlO0lBQW5FOztJQVFBLENBQUM7SUFQUSxxQ0FBSSxHQUFYO0lBQ0EsQ0FBQztJQUVNLHlDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQXVCLE9BQU8sRUFBRSwwQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFSRCxDQUFvRCx5QkFBZSxHQVFsRSJ9