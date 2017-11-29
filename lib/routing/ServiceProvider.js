"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var VueRouterService_1 = require("./VueRouterService");
var ServiceProvider_1 = require("../support/ServiceProvider");
var RoutingServiceProvider = /** @class */ (function(_super) {
  __extends(RoutingServiceProvider, _super);
  function RoutingServiceProvider() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  RoutingServiceProvider.prototype.register = function() {
    this.mergeConfigFrom(config_1.default, "router");
    $container
      .bind("$router")
      .to(VueRouterService_1.default)
      .inSingletonScope();
    return $container.get("$router").buildRouter();
  };
  return RoutingServiceProvider;
})(ServiceProvider_1.default);
exports.default = RoutingServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRpbmcvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFvQztBQUVwQyx1REFBa0Q7QUFDbEQsOERBQXlEO0FBRXpEO0lBQW9ELDBDQUFlO0lBQW5FOztJQVdBLENBQUM7SUFWUSx5Q0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLFVBQVU7YUFDUCxJQUFJLENBQWtCLFNBQVMsQ0FBQzthQUNoQyxFQUFFLENBQUMsMEJBQWdCLENBQUM7YUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBa0IsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQVhELENBQW9ELHlCQUFlLEdBV2xFIn0=
