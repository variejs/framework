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
var VuexService_1 = require("./VuexService");
var serviceProvider_1 = require("../support/serviceProvider");
var StateServiceProvider = /** @class */ (function (_super) {
    __extends(StateServiceProvider, _super);
    function StateServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateServiceProvider.prototype.register = function () {
        $container
            .bind("$store")
            .to(VuexService_1.default)
            .inSingletonScope();
    };
    return StateServiceProvider;
}(serviceProvider_1.default));
exports.default = StateServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0YXRlL3NlcnZpY2VQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsOERBQXlEO0FBR3pEO0lBQWtELHdDQUFlO0lBQWpFOztJQU9BLENBQUM7SUFOUSx1Q0FBUSxHQUFmO1FBQ0UsVUFBVTthQUNQLElBQUksQ0FBd0IsUUFBUSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO2FBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBa0QseUJBQWUsR0FPaEUifQ==