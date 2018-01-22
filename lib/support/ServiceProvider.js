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
var inversify_1 = require("inversify");
var util_1 = require("util");
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(app) {
        this.app = app;
        app.providers.push(this);
    }
    ServiceProvider.prototype.mergeConfigFrom = function (frameworkConfig, key) {
        var appConfig = $config.get(key);
        for (var appConfigKey in appConfig) {
            if (appConfig[appConfigKey]) {
                if (util_1.isObject(appConfig[appConfigKey])) {
                    Object.assign(frameworkConfig[appConfigKey], appConfig[appConfigKey]);
                }
                else if (appConfig[appConfigKey]) {
                    frameworkConfig[appConfigKey] = appConfig[appConfigKey];
                }
            }
        }
        $config.set(key, frameworkConfig);
    };
    ServiceProvider.prototype.boot = function () { };
    ServiceProvider = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object])
    ], ServiceProvider);
    return ServiceProvider;
}());
exports.default = ServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N1cHBvcnQvU2VydmljZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBR3ZDLDZCQUFnQztBQUdoQztJQUdFLHlCQUFZLEdBQXlCO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVTLHlDQUFlLEdBQXpCLFVBQTBCLGVBQW1CLEVBQUUsR0FBVztRQUN4RCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsZUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLGVBQWUsQ0FBQyxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw4QkFBSSxHQUFYLGNBQWUsQ0FBQztJQXZCRyxlQUFlO1FBRG5DLHNCQUFVLEVBQUU7O09BQ1EsZUFBZSxDQXdCbkM7SUFBRCxzQkFBQztDQUFBLEFBeEJELElBd0JDO2tCQXhCb0IsZUFBZSJ9