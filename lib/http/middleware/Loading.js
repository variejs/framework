"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loading = /** @class */ (function () {
    function Loading() {
        this.timeoutSet = false;
        this.spinnerTimeout = null;
        this.requestsCounter = 0;
    }
    Loading.prototype.request = function (config) {
        var _this = this;
        if (this.timeoutSet === false) {
            this.spinnerTimeout = setTimeout(function () {
                _this._turnOnSpinner();
            }, 1500);
            this.timeoutSet = true;
        }
        this.requestsCounter++;
        return config;
    };
    Loading.prototype.response = function (response) {
        if (--this.requestsCounter === 0) {
            this._turnOffSpinner();
        }
        return response;
    };
    Loading.prototype.responseError = function (error) {
        if (--this.requestsCounter === 0) {
            this._turnOffSpinner();
        }
        return Promise.reject(error);
    };
    Loading.prototype._turnOnSpinner = function () {
        var spinnerElement = this._getSpinnerElement();
        if (!spinnerElement) {
            document.body.innerHTML +=
                '<div id="spinner" class="sk-container">' +
                    '<div class="sk-folding-cube">' +
                    '  <div class="sk-cube1 sk-cube"></div>' +
                    '  <div class="sk-cube2 sk-cube"></div>' +
                    '  <div class="sk-cube4 sk-cube"></div>' +
                    '  <div class="sk-cube3 sk-cube"></div>' +
                    '</div>' +
                    '</div>';
        }
    };
    Loading.prototype._getSpinnerElement = function () {
        return document.getElementById("spinner");
    };
    Loading.prototype._turnOffSpinner = function () {
        clearTimeout(this.spinnerTimeout);
        this.spinnerTimeout = null;
        var spinnerElement = this._getSpinnerElement();
        if (spinnerElement) {
            spinnerElement.remove();
        }
    };
    return Loading;
}());
exports.default = Loading;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmUvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7UUFFVSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBMEQ5QixDQUFDO0lBeERRLHlCQUFPLEdBQWQsVUFBZSxNQUFlO1FBQTlCLGlCQVdDO1FBVkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2dCQUMvQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwwQkFBUSxHQUFmLFVBQWdCLFFBQWlCO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUN4QixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU0sK0JBQWEsR0FBcEIsVUFBcUIsS0FBSztRQUN4QixFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyxnQ0FBYyxHQUF0QjtRQUNFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRS9DLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ3JCLHlDQUF5QztvQkFDdkMsK0JBQStCO29CQUMvQix3Q0FBd0M7b0JBQ3hDLHdDQUF3QztvQkFDeEMsd0NBQXdDO29CQUN4Qyx3Q0FBd0M7b0JBQ3hDLFFBQVE7b0JBQ1YsUUFBUSxDQUFDO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFTyxvQ0FBa0IsR0FBMUI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ08saUNBQWUsR0FBdkI7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE5REQsSUE4REMifQ==