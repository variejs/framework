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
var _ = require("lodash");
var inversify_1 = require("inversify");
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(app) {
        this._app = {};
        this._app = app;
        app.providers.push(this);
    }
    ServiceProvider.prototype.mergeConfigFrom = function (config, key) {
        $config.set(key, _.merge(config, $config.get(key)));
    };
    ServiceProvider.prototype.boot = function () { };
    ServiceProvider = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], ServiceProvider);
    return ServiceProvider;
}());
exports.default = ServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N1cHBvcnQvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTRCO0FBQzVCLHVDQUF1QztBQUl2QztJQUdFLHlCQUFZLEdBQUc7UUFGZixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBR1IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVTLHlDQUFlLEdBQXpCLFVBQTBCLE1BQU0sRUFBRSxHQUFHO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSw4QkFBSSxHQUFYLGNBQWUsQ0FBQztJQVpHLGVBQWU7UUFEbkMsc0JBQVUsRUFBRTs7T0FDUSxlQUFlLENBYW5DO0lBQUQsc0JBQUM7Q0FBQSxBQWJELElBYUM7a0JBYm9CLGVBQWUifQ==