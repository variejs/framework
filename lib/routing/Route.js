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
                this.components[name_1] = require("@views/" + component);
                if (this._props) {
                    this.components[name_1] = {
                        props: props,
                        template: this.components[name_1]
                    };
                    this.props[name_1] = true;
                }
            }
        }
        else {
            this.component = require("@views/" + components);
            if (this._props) {
                this.component = {
                    props: props,
                    template: this.component
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBVUUsZUFBWSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFMaEMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUdWLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFFckIsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLE1BQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFVLFNBQVcsQ0FBQyxDQUFDO2dCQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFJLENBQUMsR0FBRzt3QkFDdEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBSSxDQUFDO3FCQUNoQyxDQUFDO29CQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVUsVUFBWSxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUc7b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUN6QixDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sdUJBQU8sR0FBZCxVQUFlLElBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUExREQsSUEwREMifQ==