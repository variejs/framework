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
var AjvValidationService_1 = require("./AjvValidationService");
var ServiceProvider_1 = require("../support/ServiceProvider");
var RoutingServiceProvider = /** @class */ (function (_super) {
    __extends(RoutingServiceProvider, _super);
    function RoutingServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutingServiceProvider.prototype.boot = function () {
        require("./directive/Validate");
    };
    RoutingServiceProvider.prototype.register = function () {
        this.app.singleton('$validator', AjvValidationService_1.default);
    };
    return RoutingServiceProvider;
}(ServiceProvider_1.default));
exports.default = RoutingServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw4REFBeUQ7QUFHekQ7SUFBb0QsMENBQWU7SUFBbkU7O0lBUUEsQ0FBQztJQVBRLHFDQUFJLEdBQVg7UUFDRSxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0seUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUE2QixZQUFZLEVBQUUsOEJBQW9CLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBb0QseUJBQWUsR0FRbEUifQ==