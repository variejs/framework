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
var ServiceProvider_1 = require("../support/ServiceProvider");
var StateServiceProvider = /** @class */ (function (_super) {
    __extends(StateServiceProvider, _super);
    function StateServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateServiceProvider.prototype.register = function () {
        this.app.singleton("$store", VuexService_1.default);
    };
    return StateServiceProvider;
}(ServiceProvider_1.default));
exports.default = StateServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0YXRlL1NlcnZpY2VQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsOERBQXlEO0FBR3pEO0lBQWtELHdDQUFlO0lBQWpFOztJQUlBLENBQUM7SUFIUSx1Q0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQXdCLFFBQVEsRUFBRSxxQkFBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUpELENBQWtELHlCQUFlLEdBSWhFIn0=