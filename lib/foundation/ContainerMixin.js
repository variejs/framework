"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var ContainerMixin = /** @class */ (function () {
    function ContainerMixin() {
    }
    ContainerMixin.prototype.registerMixin = function (app) {
        vue_1.default.mixin({
            beforeMount: function () {
                this.$injector(this.$options.$inject || []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyTWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm91bmRhdGlvbi9Db250YWluZXJNaXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUd0QjtJQUFBO0lBaUJBLENBQUM7SUFkQyxzQ0FBYSxHQUFiLFVBQWMsR0FBeUI7UUFDckMsYUFBRyxDQUFDLEtBQUssQ0FBQztZQUNSLFdBQVc7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFNBQVMsWUFBQyxRQUF1QjtvQkFBakMsaUJBSUM7b0JBSEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQWU7d0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDIn0=