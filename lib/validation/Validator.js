"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var utilities_1 = require("./../utilities");
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
                if (!this._rules[rule].passes(utilities_1.getByDot(this._data, field), params)) {
                    this.errors[field] = utilities_1.getByDot(this._messages, field, this._rules[rule].message(params));
                    break;
                }
            }
        }
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLDZCQUFnQztBQUNoQyw0Q0FBMEM7QUFFMUM7SUFRRSxtQkFBWSxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWdCO1FBUG5ELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFHWCxXQUFNLEdBQUcsZUFBSyxDQUFDO1FBS3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxrQ0FBYyxHQUF0QixVQUF1QixNQUFXLEVBQUUsR0FBWTtRQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLGVBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLEtBQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLEtBQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixLQUFhLEVBQUUsS0FBYTtRQUM5QyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLG9CQUFRLENBQzNCLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxFQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDO29CQUNGLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDIn0=