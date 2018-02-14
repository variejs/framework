"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = /** @class */ (function () {
    function Route(path, components, groupLevel, props) {
        if (props === void 0) { props = {}; }
        this.meta = {};
        this._props = false;
        this.path = path;
        this.groupLevel = groupLevel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBV0UsZUFBWSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBTjVDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBVSxTQUFXLENBQUMsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBSSxDQUFDLEdBQUc7d0JBQ3RCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQztxQkFDaEMsQ0FBQztvQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFVLFVBQVksQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHO29CQUNmLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDekIsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sdUJBQU8sR0FBZCxVQUFlLElBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDIn0=