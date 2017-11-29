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
var VueHelperService_1 = require("./VueHelperService");
var ServiceProvider_1 = require("../../support/ServiceProvider");
var CommonServiceProvider = /** @class */ (function(_super) {
  __extends(CommonServiceProvider, _super);
  function CommonServiceProvider() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CommonServiceProvider.prototype.register = function() {
    $container
      .bind("$vueHelpers")
      .to(VueHelperService_1.default)
      .inSingletonScope();
  };
  CommonServiceProvider.prototype.boot = function() {
    $container.get("$vueHelpers").register();
  };
  return CommonServiceProvider;
})(ServiceProvider_1.default);
exports.default = CommonServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvdnVlSGVscGVycy9TZXJ2aWNlUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELGlFQUE0RDtBQUU1RDtJQUFtRCx5Q0FBZTtJQUFsRTs7SUFXQSxDQUFDO0lBVlEsd0NBQVEsR0FBZjtRQUNFLFVBQVU7YUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ25CLEVBQUUsQ0FBQywwQkFBZ0IsQ0FBQzthQUNwQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvQ0FBSSxHQUFYO1FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBbUQseUJBQWUsR0FXakUifQ==
