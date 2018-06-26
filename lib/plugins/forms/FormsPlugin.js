"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = require("./Form");
var inversify_1 = require("inversify");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms.prototype.install = function (Vue) {
        var _this = this;
        Vue.mixin({
            methods: {
                createForm: function (data) {
                    return new Form_1.default(data, _this._validator);
                }
            }
        });
    };
    __decorate([
        inversify_1.inject("$validator"),
        __metadata("design:type", Object)
    ], Forms.prototype, "_validator", void 0);
    Forms = __decorate([
        inversify_1.injectable()
    ], Forms);
    return Forms;
}());
exports.default = Forms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybXNQbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9mb3Jtcy9Gb3Jtc1BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQix1Q0FBK0M7QUFLL0M7SUFBQTtJQVlBLENBQUM7SUFUUSx1QkFBTyxHQUFkLFVBQWUsR0FBbUI7UUFBbEMsaUJBUUM7UUFQQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxVQUFDLElBQVk7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLGNBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBVnFCO1FBQXJCLGtCQUFNLENBQUMsWUFBWSxDQUFDOzs2Q0FBZ0Q7SUFEakUsS0FBSztRQURWLHNCQUFVLEVBQUU7T0FDUCxLQUFLLENBWVY7SUFBRCxZQUFDO0NBQUEsQUFaRCxJQVlDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=