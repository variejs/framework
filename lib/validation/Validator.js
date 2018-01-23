"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var isNumeric = require("validator/lib/isNumeric");
var utilities_1 = require("./../utilities");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = {};
        /**
         * The size related validation rules.
         *
         * @var array
         */
        this._sizeRules = ["between", "min", "max", "size"];
        this._data = data;
        this._schema = schema;
        this._messages = messages;
        this._rules = $config.get("validation.rules");
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
                    this.errors[field] = this._makeReplacements(this._getMessage(rule, field), rule, field, parameters);
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
        message = message.replace(":field", utilities_1.uncamelize(field.replace(".", "s ")));
        if (ruleFunctions.replacers) {
            ruleFunctions.replacers().forEach(function (replacer, index) {
                message = message.replace(":" + replacer, utilities_1.uncamelize(parameters[index].replace(".", "s ")));
            });
        }
        if (message.indexOf(":values") > -1) {
            message.replace(":values", parameters.join(", "));
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
        if (this._sizeRules.indexOf(rule) > -1) {
            return this._getSizeMessage(field, rule);
        }
        var tempRule = this._getRule(rule).message;
        if (tempRule) {
            return tempRule();
        }
        return this._getMessageFromLocale(rule);
    };
    Validator.prototype._getSizeMessage = function (field, rule) {
        var type = "string";
        var locale = $config.get("app.locale");
        var value = utilities_1.getByDot(this._data, field);
        if (util_1.isObject(value)) {
            type = "file";
        }
        else if (util_1.isArray(value)) {
            type = "array";
        }
        else if (isNumeric(value)) {
            type = "numeric";
        }
        return $config.get("validation." + locale + "." + rule + "." + type);
    };
    Validator.prototype._getMessageFromLocale = function (rule) {
        var locale = $config.get("app.locale");
        return $config.get("validation." + locale + "." + rule);
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXlDO0FBQ3pDLG1EQUFxRDtBQUNyRCw0Q0FBc0Q7QUFFdEQ7SUFnQkUsbUJBQVksSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQWRuRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVgsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUtwQjs7OztXQUlHO1FBQ0ssZUFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFHckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGtDQUFjLEdBQXRCLFVBQXVCLE1BQVcsRUFBRSxHQUFZO1FBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsZUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBSSxHQUFHLFNBQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lB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