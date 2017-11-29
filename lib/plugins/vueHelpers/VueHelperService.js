"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var _ = require("lodash");
var inversify_1 = require("inversify");
var VueHelperService = /** @class */ (function() {
  function VueHelperService() {}
  VueHelperService.prototype.register = function() {
    this.registerComponents();
  };
  VueHelperService.prototype.registerComponents = function() {
    var _this = this;
    var files = require.context("@components", true, /^\.\/.*\.(vue)$/);
    files.keys().forEach(function(filename) {
      vue_1.default.component(
        _this.getComponentName(filename),
        files(filename)
      );
    });
  };
  VueHelperService.prototype.getComponentName = function(filename) {
    return _.kebabCase(filename.replace(".vue", ""));
  };
  VueHelperService = __decorate([inversify_1.injectable()], VueHelperService);
  return VueHelperService;
})();
exports.default = VueHelperService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnVlSGVscGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL3Z1ZUhlbHBlcnMvVnVlSGVscGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJCQUFzQjtBQUN0QiwwQkFBNEI7QUFDNUIsdUNBQXVDO0FBR3ZDO0lBQUE7SUFlQSxDQUFDO0lBZFEsbUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyw2Q0FBa0IsR0FBMUI7UUFBQSxpQkFLQztRQUpDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQzNCLGFBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDJDQUFnQixHQUF4QixVQUF5QixRQUFnQjtRQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFka0IsZ0JBQWdCO1FBRHBDLHNCQUFVLEVBQUU7T0FDUSxnQkFBZ0IsQ0FlcEM7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztrQkFmb0IsZ0JBQWdCIn0=
