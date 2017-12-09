"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var ContainerMixin = /** @class */ (function () {
    function ContainerMixin() {
    }
    ContainerMixin.prototype.registerMixin = function (app) {
        vue_1.default.mixin({
            beforeMount: function () {
                this.$injector(this.inject || []);
            },
            methods: {
                $injector: function (services) {
                    var _this = this;
                    services.forEach(function (service) {
                        _this[service] = app.make(service);
                    });
                }
            }
        });
    };
    return ContainerMixin;
}());
exports.default = ContainerMixin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyTWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9Db250YWluZXJNaXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUd0QjtJQUFBO0lBaUJBLENBQUM7SUFkQyxzQ0FBYSxHQUFiLFVBQWMsR0FBeUI7UUFDckMsYUFBRyxDQUFDLEtBQUssQ0FBQztZQUNSLFdBQVc7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxZQUFDLFFBQXVCO29CQUFqQyxpQkFJQztvQkFIQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBZTt3QkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMifQ==