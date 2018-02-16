"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = /** @class */ (function () {
    function Route(path, components, props) {
        if (props === void 0) { props = {}; }
        this.meta = {};
        this._props = false;
        this.path = path;
        if (Object.keys(props).length) {
            this._props = true;
        }
        if (typeof components === "object") {
            if (this._props) {
                this.props = {};
            }
            this.components = {};
            for (var name_1 in components) {
                var component = components[name_1];
                this.components[name_1] = require("@views/" + component).default;
                if (this._props) {
                    this.components[name_1] = {
                        props: props,
                        component: this.components[name_1]
                    };
                    this.props[name_1] = true;
                }
            }
        }
        else {
            this.component = require("@views/" + components).default;
            if (this._props) {
                this.component = {
                    props: props,
                    component: this.component
                };
            }
        }
    }
    Route.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Route.prototype.setMeta = function (data) {
        this.meta = Object.assign(this.meta, data);
        return this;
    };
    Route.prototype.setAlias = function (alias) {
        this.alias = alias;
    };
    return Route;
}());
exports.default = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBVUUsZUFBWSxJQUFZLEVBQUUsVUFBa0MsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBVGhFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFNVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBVSxTQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQy9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQyxHQUFHO3dCQUN0QixLQUFLLEVBQUUsS0FBSzt3QkFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFJLENBQUM7cUJBQ2pDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBVSxVQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUc7b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUMxQixDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sdUJBQU8sR0FBZCxVQUFlLElBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUExREQsSUEwREMifQ==