"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var utilities_1 = require("./../utilities");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = rules_1.default;
        /**
         * The size related validation rules.
         *
         * @var array
         */
        this._sizeRules = ["between", "min", "max", "mimetypes", "size"];
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
                if (!this._getRule(rule).passes(this._getValue(field), parameters, this._data)) {
                    this.errors[field] = this._makeReplacements(this._getMessage(rule, field, parameters), rule, field, parameters);
                    break;
                }
            }
        }
    };
    Validator.prototype._getRule = function (rule) {
        return this._rules[rule];
    };
    Validator.prototype._makeReplacements = function (message, rule, field, parameters) {
        var ruleFunctions = this._getRule(rule);
        // TODO - uncamel
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
        // elseif (in_array($rule, $this->sizeRules)) {
        //   return $this->getSizeMessage($attribute, $rule);
        // }
        return this._getMessageFromLocale(rule);
    };
    Validator.prototype._getSizeMessage = function (field, rule) {
        // TODO - string / file / numeric / array
        return $config.get("validation.en." + rule + ".string");
    };
    Validator.prototype._getMessageFromLocale = function (rule) {
        var locale = $config.get("app.locale");
        return $config.get("validation." + locale + "." + rule);
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLDZCQUFnQztBQUNoQyw0Q0FBMEM7QUFFMUM7SUFzREUsbUJBQVksSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQXJEbkQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdYLFdBQU0sR0FBRyxlQUFLLENBQUM7UUFJdkI7Ozs7V0FJRztRQUNLLGVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRTs7OztXQUlHO1FBQ0ssbUJBQWMsR0FBRztZQUN2QixVQUFVO1lBQ1YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsVUFBVTtTQUNYLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0M7Ozs7V0FJRztRQUNPLG9CQUFlLEdBQUc7WUFDMUIsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLE1BQU07WUFDTixXQUFXO1lBQ1gsUUFBUTtZQUNSLFFBQVE7WUFDUixPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWM7U0FDZixDQUFDO1FBR0EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtDQUFj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