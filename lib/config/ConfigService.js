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
var Config = /** @class */ (function () {
    function Config() {
        var _this = this;
        this._configs = {};
        var files = require.context("@config", true, /^\.\/.*\.(ts)$/);
        _.each(files.keys(), function (filename) {
            var configName = filename
                .replace(/^\.\//, "")
                .replace(/\/$/, "")
                .replace(/\.js/, "")
                .replace(/\.ts/, "");
            _this._configs[configName] = files(filename).default;
        });
    }
    Config.prototype.get = function (key, defaultValue) {
        return _.get(this._configs, key, defaultValue);
    };
    Config.prototype.set = function (key, value) {
        return _.set(this._configs, key, value);
    };
    Config = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvQ29uZmlnU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBCQUE0QjtBQUM1Qix1Q0FBdUM7QUFJdkM7SUFHRTtRQUFBLGlCQVlDO1FBZE0sYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUduQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUUvRCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFBLFFBQVE7WUFDM0IsSUFBSSxVQUFVLEdBQUcsUUFBUTtpQkFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7aUJBQ3BCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2lCQUNsQixPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztpQkFDbkIsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV2QixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEdBQUcsRUFBRSxZQUFhO1FBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLEtBQUs7UUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBdkJrQixNQUFNO1FBRDFCLHNCQUFVLEVBQUU7O09BQ1EsTUFBTSxDQXdCMUI7SUFBRCxhQUFDO0NBQUEsQUF4QkQsSUF3QkM7a0JBeEJvQixNQUFNIn0=