"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = rules_1.default;
        this._data = data;
        this._schema = schema;
        this._messages = messages;
    }
    Validator.prototype.validate = function () {
        return this.validateSchema(this._schema);
    };
    Validator.prototype.validateSchema = function (schema, key) {
        for (var field in schema) {
            if (util_1.isObject(schema[field])) {
                this.validateSchema(schema[field], key ? key + "." + field : field);
            }
            else {
                var ruleField = key ? key + "." + field : field;
                this._checkRules(ruleField, schema[field]);
            }
        }
        return this.errors;
    };
    Validator.prototype._checkRules = function (field, rules) {
        rules = rules.split("|");
        if (rules.length) {
            for (var ruleIndex in rules) {
                var tempRule = rules[ruleIndex].split(":");
                var rule = tempRule[0];
                var params = null;
                if (tempRule[1]) {
                    params = tempRule[1].split(",");
                }
                if (!this._rules[rule].passes(this._get(field), params)) {
                    var errorMessage = this._rules[rule].message(params);
                    this.errors[field] = errorMessage;
                    break;
                }
            }
        }
    };
    // TODO - MOVE THIS TO A HELPER?
    Validator.prototype._get = function (path, defaultValue) {
        var value = path.split(".").reduce(function (prev, curr) {
            return prev ? prev[curr] : undefined;
        }, this._data);
        return value !== undefined ? value : defaultValue;
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLDZCQUFnQztBQUVoQztJQVFFLG1CQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0I7UUFQbkQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdYLFdBQU0sR0FBRyxlQUFLLENBQUM7UUFLckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtDQUFjLEdBQXRCLFVBQXVCLE1BQVcsRUFBRSxHQUFZO1FBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsZUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLCtCQUFXLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxLQUFhO1FBQzlDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLENBQUM7b0JBQ2xDLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsZ0NBQWdDO0lBQ3hCLHdCQUFJLEdBQVosVUFBYSxJQUFZLEVBQUUsWUFBa0I7UUFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFZLEVBQUUsSUFBWTtZQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWYsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUF6REQsSUF5REMifQ==