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
        inversify_1.inject('$validator'),
        __metadata("design:type", Object)
    ], Forms.prototype, "_validator", void 0);
    Forms = __decorate([
        inversify_1.injectable()
    ], Forms);
    return Forms;
}());
exports.default = Forms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm1QbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIsdUNBQStDO0FBSy9DO0lBQUE7SUFjQSxDQUFDO0lBVFEsdUJBQU8sR0FBZCxVQUFlLEdBQW1CO1FBQWxDLGlCQVFDO1FBUEMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsVUFBQyxJQUFZO29CQUN2QixNQUFNLENBQUMsSUFBSSxjQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekMsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZEO1FBREMsa0JBQU0sQ0FBQyxZQUFZLENBQUM7OzZDQUMyQjtJQUg1QyxLQUFLO1FBRFYsc0JBQVUsRUFBRTtPQUNQLEtBQUssQ0FjVjtJQUFELFlBQUM7Q0FBQSxBQWRELElBY0M7QUFFRCxrQkFBZSxLQUFLLENBQUMifQ==