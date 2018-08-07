import * as isNumeric from "validator/lib/isNumeric";
import { getByDot, uncamelize } from "./../utilities";

export default class Validation {
  public errors: object = {};

  protected _data: object;
  protected _schema: object;
  protected _messages: object;
  protected _rules: object = {};

  /**
   * The size related validation rules.
   *
   * @var array
   */
  private _sizeRules = ["between", "min", "max", "size"];

  constructor(data: object, schema: object, messages: object) {
    this._data = data;
    this._schema = schema;
    this._messages = messages;
    this._rules = $config.get("validation.rules");
  }

  public validate() {
    return this.validateSchema(this._schema);
  }

  private validateSchema(schema: any, key?: string) {
    for (let field in schema) {
      if (typeof schema[field] === "object") {
        this.validateSchema(schema[field], key ? `${key}.${field}` : field);
      } else {
        let ruleField = key ? `${key}.${field}` : field;
        this._checkRules(ruleField, schema[field]);
      }
    }
    return this.errors;
  }

  private _checkRules(field: string, rules: string) {
    let rulesArray = rules.split("|");
    if (rulesArray.length) {
      for (let ruleIndex in rulesArray) {
        let tempRule = rulesArray[ruleIndex].split(":");
        let rule = tempRule[0];
        let parameters: Array<any> = [];
        if (tempRule[1]) {
          parameters = tempRule[1].split(",");
        }

        let ruleClass = this._getRule(rule);
        if (ruleClass === undefined) {
          throw `We cannot find the rule ${rule}`;
        }

        if (
          !ruleClass.passes(this._getValue(field), parameters, this._data, field) &&
          rule !== "nullable"
        ) {
          this.errors[field] = this._makeReplacements(
            this._getMessage(rule, field),
            rule,
            field,
            parameters
          );
          break;
        }

        if (rule === "nullable") {
          break;
        }
      }
    }
  }

  private _getRule(rule: string) {
    return this._rules[rule];
  }

  private _makeReplacements(
    message: string,
    rule: string,
    field: string,
    parameters: any
  ) {
    let ruleFunctions = this._getRule(rule);
    if (!message) {
      return `The ${field} fails the validation.`;
    }
    message = message.replace(":field", uncamelize(field.replace(".", "s ")));
    if (ruleFunctions.replacers) {
      ruleFunctions.replacers().forEach((replacer: string, index: number) => {
        message = message.replace(
          `:${replacer}`,
          uncamelize(parameters[index].replace(".", "s "))
        );
      });
    }

    if (message.indexOf(":values") > -1) {
      message.replace(":values", parameters.join(", "));
    }

    return message;
  }

  private _getValue(field: string) {
    return getByDot(this._data, field);
  }

  private _getMessage(rule: string, field: string) {
    let customMessage = getByDot(this._messages, field);

    if (customMessage) {
      return customMessage;
    }

    if (this._sizeRules.indexOf(rule) > -1) {
      return this._getSizeMessage(field, rule);
    }

    let tempRule = this._getRule(rule).message;
    if (tempRule) {
      return tempRule();
    }

    return this._getMessageFromLocale(rule);
  }

  private _getSizeMessage(field: string, rule: string) {
    let type = "string";
    let locale = $config.get("app.locale");
    let value = getByDot(this._data, field);

    if (typeof value === "object") {
      type = "file";
    } else if (Array.isArray(value)) {
      type = "array";
    } else if (isNumeric(value)) {
      type = "numeric";
    }

    return $config.get(`validation.${locale}.${rule}.${type}`);
  }

  private _getMessageFromLocale(rule: string) {
    let locale = $config.get("app.locale");
    return $config.get(`validation.${locale}.${rule}`);
  }
}
