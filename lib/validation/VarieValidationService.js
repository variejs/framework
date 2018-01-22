"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = require("./Validator");
var inversify_1 = require("inversify");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validate = function (data, schema, messages) {
        if (messages === void 0) { messages = {}; }
        return new Validator_1.default(data, schema, messages).validate();
    };
    ValidationService = __decorate([
        inversify_1.injectable()
    ], ValidationService);
    return ValidationService;
}());
exports.default = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyaWVWYWxpZGF0aW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL1ZhcmllVmFsaWRhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsdUNBQXVDO0FBSXZDO0lBQUE7SUFJQSxDQUFDO0lBSFEsb0NBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWE7UUFBYix5QkFBQSxFQUFBLGFBQWE7UUFDekQsTUFBTSxDQUFDLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFIa0IsaUJBQWlCO1FBRHJDLHNCQUFVLEVBQUU7T0FDUSxpQkFBaUIsQ0FJckM7SUFBRCx3QkFBQztDQUFBLEFBSkQsSUFJQztrQkFKb0IsaUJBQWlCIn0=