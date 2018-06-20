"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_inject_decorators_1 = require("inversify-inject-decorators");
var lazyInject = inversify_inject_decorators_1.default($app.$container).lazyInject;
var BaseActions = /** @class */ (function () {
    function BaseActions() {
    }
    BaseActions = __decorate([
        inversify_1.injectable()
    ], BaseActions);
    return BaseActions;
}());
exports.default = BaseActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RhdGUvY2xhc3Nlcy9CYXNlQWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLHVDQUF1QztBQUN2QywyRUFBd0Q7QUFDbEQsSUFBQSw4RUFBVSxDQUFvQztBQUdwRDtJQUFBO0lBRUEsQ0FBQztJQUZvQixXQUFXO1FBRC9CLHNCQUFVLEVBQUU7T0FDUSxXQUFXLENBRS9CO0lBQUQsa0JBQUM7Q0FBQSxBQUZELElBRUM7a0JBRm9CLFdBQVcifQ==