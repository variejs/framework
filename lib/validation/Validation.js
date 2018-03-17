"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var isNumeric = require("validator/lib/isNumeric");
var utilities_1 = require("./../utilities");
var Validation = /** @class */ (function () {
    function Validation(data, schema, messages) {
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
    Validation.prototype.validate = function () {
        return this.validateSchema(this._schema);
    };
    Validation.prototype.validateSchema = function (schema, key) {
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
    Validation.prototype._checkRules = function (field, rules) {
        rules = rules.split("|");
        if (rules.length) {
            for (var ruleIndex in rules) {
                var tempRule = rules[ruleIndex].split(":");
                var rule = tempRule[0];
                var parameters = null;
                if (tempRule[1]) {
                    parameters = tempRule[1].split(",");
                }
                var ruleClass = this._getRule(rule);
                if (ruleClass === undefined) {
                    throw "We cannot find the rule " + rule;
                }
                if (!ruleClass.passes(this._getValue(field), parameters, this._data)) {
                    this.errors[field] = this._makeReplacements(this._getMessage(rule, field), rule, field, parameters);
                    break;
                }
            }
        }
    };
    Validation.prototype._getRule = function (rule) {
        return this._rules[rule];
    };
    Validation.prototype._makeReplacements = function (message, rule, field, parameters) {
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
    Validation.prototype._getValue = function (field) {
        return utilities_1.getByDot(this._data, field);
    };
    Validation.prototype._getMessage = function (rule, field) {
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
    Validation.prototype._getSizeMessage = function (field, rule) {
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
    Validation.prototype._getMessageFromLocale = function (rule) {
        var locale = $config.get("app.locale");
        return $config.get("validation." + locale + "." + rule);
    };
    return Validation;
}());
exports.default = Validation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL1ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBeUM7QUFDekMsbURBQXFEO0FBQ3JELDRDQUFzRDtBQUV0RDtJQWVFLG9CQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0I7UUFkbkQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVYLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFLcEI7Ozs7V0FJRztRQUNLLGVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBR3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxtQ0FBYyxHQUF0QixVQUF1QixNQUFXLEVBQUUsR0FBWTtRQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLGVBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLEtBQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsQ0FBQztZ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