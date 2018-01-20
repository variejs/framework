"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("./rules");
var util_1 = require("util");
var utilities_1 = require("./../utilities");
var Validator = /** @class */ (function () {
    function Validator(data, schema, messages) {
        this.errors = {};
        this._rules = rules_1.default;
        this._sizeRules = [
            'Size', 'Between', 'min', 'max'
        ];
        this._fileRules = [
            'File', 'Image', 'Mimes', 'Mimetypes', 'min',
            'max', 'Size', 'Between', 'Dimensions',
        ];
        this._numericRules = ['numeric', 'integer'];
        this._dependentRules = [
            'RequiredWith', 'RequiredWithAll', 'RequiredWithout', 'RequiredWithoutAll',
            'RequiredIf', 'RequiredUnless', 'Confirmed', 'Same', 'Different', 'Unique',
            'Before', 'After', 'BeforeOrEqual', 'AfterOrEqual',
        ];
        this._implicitRules = [
            'Required', 'Filled', 'RequiredWith', 'RequiredWithAll', 'RequiredWithout',
            'RequiredWithoutAll', 'RequiredIf', 'RequiredUnless', 'Accepted', 'Present',
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
        rules = rules.split('|');
        if (rules.length) {
            for (var ruleIndex in rules) {
                var tempRule = rules[ruleIndex].split(':');
                var rule = tempRule[0];
                var parameters = null;
                if (tempRule[1]) {
                    parameters = tempRule[1].split(',');
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
        message = message.replace(':field', field.replace('.', ' '));
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
        var locale = $config.get('app.locale');
        return $config.get("validation." + locale + "." + rule);
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQTJCO0FBQzNCLDZCQUErQjtBQUMvQiw0Q0FBeUM7QUFFekM7SUE4QkUsbUJBQWEsSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQTdCcEQsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUdWLFdBQU0sR0FBRyxlQUFLLENBQUE7UUFJZCxlQUFVLEdBQUc7WUFDbkIsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSztTQUNoQyxDQUFBO1FBRU8sZUFBVSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLO1lBQzVDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVk7U0FDdkMsQ0FBQTtRQUVPLGtCQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFFdEMsb0JBQWUsR0FBRztZQUN4QixjQUFjLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO1lBQzFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRO1lBQzFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWM7U0FDbkQsQ0FBQTtRQUVPLG1CQUFjLEdBQUc7WUFDdkIsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQzFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsU0FBUztTQUM1RSxDQUFBO1FBR0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FB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