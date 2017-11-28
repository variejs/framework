"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Route = /** @class */ (function () {
    function Route(path, components, meta, props) {
        if (props === void 0) { props = {}; }
        var _this = this;
        this._props = false;
        this.path = path;
        this.meta = meta || {};
        if (meta.template && meta.template) {
            meta.template.component = require("@views/" + meta.template.template);
        }
        if (Object.keys(props).length) {
            this._props = true;
        }
        if (_.isObject(components)) {
            if (this._props) {
                this.props = {};
            }
            this.components = {};
            _.each(components, function (component, name) {
                _this.components[name] = require("@views/" + component);
                if (_this._props) {
                    _this.components[name] = {
                        props: props,
                        template: _this.components[name]
                    };
                    _this.props[name] = true;
                }
            });
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
        this.name = _.camelCase("" + prefix + path);
    }
    Route.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Route.prototype.setAlias = function (alias) {
        this.alias = alias;
    };
    return Route;
}());
exports.default = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUE0QjtBQUU1QjtJQVVFLGVBQVksSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBVTtRQUFWLHNCQUFBLEVBQUEsVUFBVTtRQUE5QyxpQkFxQ0M7UUF2Q08sV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVUsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxTQUFTLEVBQUUsSUFBSTtnQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBVSxTQUFXLENBQUMsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUc7d0JBQ3RCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDaEMsQ0FBQztvQkFDRixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBVSxVQUFZLENBQUMsQ0FBQztZQUNqRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRztvQkFDZixLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3pCLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBRyxNQUFNLEdBQUcsSUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQyJ9