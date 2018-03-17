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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var inversify_1 = require("inversify");
var AxiosHttpService = /** @class */ (function () {
    function AxiosHttpService($config) {
        var _this = this;
        this._middleware = {};
        var config = $config.get("http");
        this.axios = axios_1.default.create(config);
        require("@app/middleware").default.forEach(function (middleware) {
            _this.registerMiddleware(middleware);
        });
    }
    AxiosHttpService.prototype.delete = function (url, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("delete", config, url);
    };
    AxiosHttpService.prototype.get = function (url, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("get", config, url);
    };
    AxiosHttpService.prototype.head = function (url, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("head", config, url);
    };
    AxiosHttpService.prototype.options = function (url, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("options", config, url);
    };
    AxiosHttpService.prototype.post = function (url, data, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("post", config, url, data);
    };
    AxiosHttpService.prototype.put = function (url, data, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("put", config, url, data);
    };
    AxiosHttpService.prototype.patch = function (url, data, config) {
        if (config === void 0) { config = {}; }
        return this._makeRequest("patch", config, url, data);
    };
    AxiosHttpService.prototype._makeRequest = function (method, config, url, data) {
        if (config === void 0) { config = {}; }
        return this.axios[method](url, data, config);
    };
    AxiosHttpService.prototype.registerMiddleware = function (Middleware) {
        var middleware = new Middleware();
        this._middleware[middleware.constructor.name] = {
            request: this.axios.interceptors.request.use(function (config) {
                if (middleware.request) {
                    return middleware.request(config);
                }
                return config;
            }),
            response: this.axios.interceptors.response.use(function (response) {
                if (middleware.response) {
                    return middleware.response(response);
                }
                return response;
            }, function (error) {
                if (middleware.responseError) {
                    return middleware.responseError(error);
                }
                return Promise.reject(error);
            })
        };
    };
    AxiosHttpService.prototype.unregisterMiddleware = function (Middleware) {
        var middleware = new Middleware().constructor.name;
        axios_1.default.interceptors.request.eject(this._middleware[middleware].request);
        axios_1.default.interceptors.response.eject(this._middleware[middleware].response);
    };
    AxiosHttpService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("$config")),
        __metadata("design:paramtypes", [Object])
    ], AxiosHttpService);
    return AxiosHttpService;
}());
exports.default = AxiosHttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NIdHRwU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odHRwL0F4aW9zSHR0cFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFFMUIsdUNBQStDO0FBRy9DO0lBSUUsMEJBQStCLE9BQU87UUFBdEMsaUJBT0M7UUFUTyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUd2QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtZQUNuRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQU0sR0FBYixVQUFjLEdBQVcsRUFBRSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDhCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSwrQkFBSSxHQUFYLFVBQVksR0FBVyxFQUFFLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFD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