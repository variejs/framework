"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelCase = require("camelcase");
var Route = /** @class */ (function () {
    function Route(path, components, meta, props) {
        if (props === void 0) { props = {}; }
        this._props = false;
        this.path = path;
        this.meta = meta || {};
        if (meta.template && meta.template) {
            meta.template.component = require("@views/" + meta.template.template);
        }
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
        var prefix = this.meta.prefix ? this.meta.prefix + "/" : "";
        this.name = camelCase("" + prefix + path);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF1QztBQUV2QztJQVVFLGVBQVksSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBVTtRQUFWLHNCQUFBLEVBQUEsVUFBVTtRQUZ0QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBVSxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBVSxTQUFXLENBQUMsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBSSxDQUFDLEdBQUc7d0JBQ3RCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQUksQ0FBQztxQkFDaEMsQ0FBQztvQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFVLFVBQVksQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHO29CQUNmLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDekIsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUcsTUFBTSxHQUFHLElBQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQyJ9