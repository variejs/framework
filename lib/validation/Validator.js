"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var utilities_1 = require("./../utilities");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = rules_1.default;
        this._sizeRules = ["Size", "Between", "min", "max"];
        this._fileRules = [
            "File",
            "Image",
            "Mimes",
            "Mimetypes",
            "min",
            "max",
            "Size",
            "Between",
        ];
        this._numericRules = ["numeric", "integer"];
        this._dependentRules = [
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
        this._implicitRules = [
            "Required",
            "Filled",
            "RequiredWith",
            "RequiredWithAll",
            "RequiredWithout",
            "RequiredWithoutAll",
            "RequiredIf",
            "RequiredUnless",
            "Accepted",
            "Present"
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
                if (!this._getRule(rule).passes(this._getValue(field), parameters)) {
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
    Validator.prototype._getMessage = function (rule, field, parameters) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTRCO0FBQzVCLDZCQUFnQztBQUNoQyw0Q0FBMEM7QUFFMUM7SUFxREUsbUJBQVksSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQXBEbkQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdYLFdBQU0sR0FBRyxlQUFLLENBQUM7UUFJZixlQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUvQyxlQUFVLEdBQUc7WUFDbkIsTUFBTTtZQUNOLE9BQU87WUFDUCxPQUFPO1lBQ1AsV0FBVztZQUNYLEtBQUs7WUFDTCxLQUFLO1lBQ0wsTUFBTTtZQUNOLFNBQVM7U0FDVixDQUFDO1FBRU0sa0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV2QyxvQkFBZSxHQUFHO1lBQ3hCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxNQUFNO1lBQ04sV0FBVztZQUNYLFFBQVE7WUFDUixRQUFRO1lBQ1IsT0FBTztZQUNQLGVBQWU7WUFDZixjQUFjO1NBQ2YsQ0FBQztRQUVNLG1CQUFjLEdBQUc7WUFDdkIsVUFBVTtZQUNWLFFBQVE7WUFDUixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsU0FBUztTQUNWLENBQUM7UUFHQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FB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