"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var utilities_1 = require("./../utilities");
var isNumeric = require("validator/lib/isNumeric");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = rules_1.default;
        /**
         * The size related validation rules.
         *
         * @var array
         */
        this._sizeRules = ["between", "min", "max", "size"];
        /**
         * The validation rules that imply the field is required.
         *
         * @var array
         */
        this._implicitRules = [
            "required",
            "required_with",
            "required_with_all",
            "required_without",
            "required_without_all",
            "required_if",
            "required_unless",
            "accepted"
        ];
        // TODO - need to determine if we need this
        /**
         * The validation rules which depend on other fields as parameters.
         *
         * @var array
         */
        this.$dependentRules = [
            "RequiredWith",
            "RequiredWithAll",
            "RequiredWithout",
            "RequiredWithoutAll",
            "RequiredIf",
            "RequiredUnless",
            "Confirmed",
            "Same",
            "Different",
            "Unique",
            "Before",
            "After",
            "BeforeOrEqual",
            "AfterOrEqual"
        ];
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
                var parameters = null;
                if (tempRule[1]) {
                    parameters = tempRule[1].split(",");
                }
                // TODO - allow for array wildcards to check for validation in arrays
                // replaceAsterisksInParameters
                // TODO - we can sometimes know if a rule fails if its implicitly required, so we should check for that
                if (!this._getRule(rule).passes(this._getValue(field), parameters, this._data)) {
                    this.errors[field] = this._makeReplacements(this._getMessage(rule, field, parameters), rule, field, parameters);
                    break;
                }
            }
        }
    };
    Validator.prototype._getRule = function (rule) {
        // TODO - we should merge the rules from their config so they can have custom rules
        return this._rules[rule];
    };
    Validator.prototype._makeReplacements = function (message, rule, field, parameters) {
        var ruleFunctions = this._getRule(rule);
        // TODO - uncamel
        // TODO - if we see `values` we should grab all the values and display all them in a command list
        message = message.replace(":field", field.replace(".", " "));
        if (ruleFunctions.replacers) {
            ruleFunctions.replacers().forEach(function (replacer, index) {
                message = message.replace(":" + replacer, parameters[index]);
            });
        }
        return message;
    };
    Validator.prototype._getValue = function (field) {
        return utilities_1.getByDot(this._data, field);
    };
    Validator.prototype._getMessage = function (rule, field) {
        var customMessage = utilities_1.getByDot(this._messages, field);
        if (customMessage) {
            return customMessage;
        }
        // TODO - allow for custom messages
        // $customMessage = $this->getCustomMessageFromTranslator(
        //   $customKey = "validation.custom.{$attribute}.{$lowerRule}"
        // );
        if (this._sizeRules.indexOf(rule) > -1) {
            return this._getSizeMessage(field, rule);
        }
        return this._getMessageFromLocale(rule);
    };
    Validator.prototype._getSizeMessage = function (field, rule) {
        var value = utilities_1.getByDot(this._data, field);
        var type = 'string';
        if (util_1.isObject(value)) {
            type = 'file';
        }
        else if (util_1.isArray(value)) {
            type = 'array';
        }
        else if (isNumeric(value)) {
            type = 'numeric';
        }
        return $config.get("validation.en." + rule + "." + type);
    };
    Validator.prototype._getMessageFromLocale = function (rule) {
        var locale = $config.get("app.locale");
        return $config.get("validation." + locale + "." + rule);
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLDZCQUF3QztBQUN4Qyw0Q0FBMEM7QUFDMUMsbURBQXFEO0FBRXJEO0lBc0RFLG1CQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0I7UUFyRG5ELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFHWCxXQUFNLEdBQUcsZUFBSyxDQUFDO1FBSXZCOzs7O1dBSUc7UUFDSyxlQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV2RDs7OztXQUlHO1FBQ0ssbUJBQWMsR0FBRztZQUN2QixVQUFVO1lBQ1YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsVUFBVTtTQUNYLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0M7Ozs7V0FJRztRQUNPLG9CQUFlLEdBQUc7WUFDMUIsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLE1BQU07WUFDTixXQUFXO1lBQ1gsUUFBUTtZQUNSLFFBQVE7WUFDUixPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWM7U0FDZixDQUFDO1FBR0EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtDQUFjLEdBQXRCLFVBQXVCLE1BQVcsRUFBRSxHQUFZO1FBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsZUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLCtCQUFXLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxLQUFhO1FBQzlDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCxxRUFBcUU7Z0JBQ3JFLCtCQUErQjtnQkFDL0IsdUdBQXVHO2dCQUN2RyxFQUFFLENBQUMsQ0FDRCxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNyQixVQUFVLEVBQ1YsSUFBSSxDQUFDLEtBQUssQ0FFZCxDQUFDLENBQUMsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUN6QyxJQUFJLEVBQ0osS0FBSyxFQUNMLFVBQVUsQ0FDWCxDQUFDO29CQUNGLEtBQUssQ0FBQztnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sNEJBQVEsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixtRkFBbUY7UUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLHFDQUFpQixHQUF6QixVQUNFLE9BQWUsRUFDZixJQUFZLEVBQ1osS0FBYSxFQUNiLFVBQWU7UUFFZixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGlCQUFpQjtRQUNqQixpR0FBaUc7UUFDakcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxLQUFLO2dCQUNoRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFJLFFBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyw2QkFBUyxHQUFqQixVQUFrQixLQUFhO1FBQzdCLE1BQU0sQ0FBQyxvQkFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLCtCQUFXLEdBQW5CLFVBQW9CLElBQVksRUFBRSxLQUFhO1FBQzdDLElBQUksYUFBYSxHQUFHLG9CQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkIsQ0FBQztRQUVELG1DQUFtQztRQUNuQywwREFBMEQ7UUFDMUQsK0RBQStEO1FBQy9ELEtBQUs7UUFFTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxtQ0FBZSxHQUF2QixVQUF3QixLQUFjLEVBQUUsSUFBYTtRQUVuRCxJQUFJLEtBQUssR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBRXBCLEVBQUUsQ0FBQSxDQUFDLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLGNBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLE9BQU8sQ0FBQTtRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFFLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQUksU0FBSSxJQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8seUNBQXFCLEdBQTdCLFVBQThCLElBQVk7UUFDeEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxNQUFNLFNBQUksSUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWhMRCxJQWdMQyJ9