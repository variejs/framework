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
var utilities_1 = require("./../utilities");
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
        return utilities_1.getByDot(this._configs, path, defaultValue);
    };
    Config.prototype.set = function (path, value) {
        return utilities_1.setByDot(this._configs, path, value);
    };
    Config = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvQ29uZmlnU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyw0Q0FBb0Q7QUFJcEQ7SUFHRTtRQUZPLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHbkIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFL0QsR0FBRyxDQUFDLENBQWlCLFVBQVksRUFBWixLQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBWixjQUFZLEVBQVosSUFBWTtZQUE1QixJQUFJLFFBQVEsU0FBQTtZQUNmLElBQUksVUFBVSxHQUFHLFFBQVE7aUJBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUNwQixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztpQkFDbEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7aUJBQ25CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVELG9CQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsWUFBaUI7UUFDakMsTUFBTSxDQUFDLG9CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG9CQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsS0FBVTtRQUMxQixNQUFNLENBQUMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdkJrQixNQUFNO1FBRDFCLHNCQUFVLEVBQUU7O09BQ1EsTUFBTSxDQXdCMUI7SUFBRCxhQUFDO0NBQUEsQUF4QkQsSUF3QkM7a0JBeEJvQixNQUFNIn0=