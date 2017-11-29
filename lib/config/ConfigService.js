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
var Config = /** @class */ (function () {
    function Config() {
        this._configs = {};
        var files = require.context("@config", true, /^\.\/.*\.(ts)$/);
        for (var _i = 0, _a = files.keys(); _i < _a.length; _i++) {
            var filename = _a[_i];
            var configName = filename
                .replace(/^\.\//, "")
                .replace(/\/$/, "")
                .replace(/\.js/, "")
                .replace(/\.ts/, "");
            this._configs[configName] = files(filename).default;
        }
    }
    Config.prototype.get = function (path, defaultValue) {
        var value = path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : undefined;
        }, this._configs);
        return value !== undefined ? value : defaultValue;
    };
    Config.prototype.set = function (path, value) {
        var parts = path.split('.');
        return parts.reduce(function (prev, curr, ix) {
            return (ix + 1 == parts.length) ? prev[curr] = value : prev[curr] = prev[curr] || {};
        }, this._configs);
    };
    Config = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvQ29uZmlnU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUl2QztJQUdFO1FBRk8sYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUduQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUUvRCxHQUFHLENBQUMsQ0FBaUIsVUFBWSxFQUFaLEtBQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTVCLElBQUksUUFBUSxTQUFBO1lBQ2YsSUFBSSxVQUFVLEdBQUcsUUFBUTtpQkFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7aUJBQ3BCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2lCQUNsQixPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztpQkFDbkIsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLElBQWEsRUFBRSxZQUFrQjtRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQWEsRUFBRyxJQUFhO1lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1FBQ3RDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFakIsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksSUFBYSxFQUFFLEtBQVc7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQWEsRUFBRSxJQUFhLEVBQUcsRUFBVztZQUNyRSxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkYsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBOUJrQixNQUFNO1FBRDFCLHNCQUFVLEVBQUU7O09BQ1EsTUFBTSxDQStCMUI7SUFBRCxhQUFDO0NBQUEsQUEvQkQsSUErQkM7a0JBL0JvQixNQUFNIn0=