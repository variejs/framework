"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var ContainerMixin = /** @class */ (function () {
    function ContainerMixin() {
    }
    ContainerMixin.prototype.registerMixin = function (app) {
        vue_1.default.mixin({
            beforeCreate: function () {
                var _this = this;
                var services = this.$options.$inject || [];
                services.forEach(function (service) {
                    _this[service] = app.make(service);
                });
            }
        });
    };
    return ContainerMixin;
}());
exports.default = ContainerMixin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyTWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9Db250YWluZXJNaXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUd0QjtJQUFBO0lBYUEsQ0FBQztJQVZDLHNDQUFhLEdBQWIsVUFBYyxHQUF5QjtRQUNyQyxhQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsWUFBWTtnQkFBWixpQkFLQztnQkFKQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlO29CQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMifQ==