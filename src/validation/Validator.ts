import Rules from "./rules";
import { isArray, isObject } from "util";
import { getByDot } from "./../utilities";
import * as isNumeric from "validator/lib/isNumeric";

export default class Validator {
  public errors = {};

  private _data: object;
  private _rules = Rules;
  private _schema: object;
  private _messages: object;

  /**
   * The size related validation rules.
   *
   * @var array
   */
  private _sizeRules = ["between", "min", "max", "size"];

  /**
   * The validation rules that imply the field is required.
   *
   * @var array
   */
  private _implicitRules = [
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
  protected $dependentRules = [
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

  constructor(data: object, schema: object, messages: object) {
    this._data = data;
    this._schema = schema;
    this._messages = messages;
  }

  public validate() {
    return this.validateSchema(this._schema);
  }

  private validateSchema(schema: any, key?: string) {
    for (let field in schema) {
      if (isObject(schema[field])) {
        this.validateSchema(schema[field], key ? `${key}.${field}` : field);
      } else {
        let ruleField = key ? `${key}.${field}` : field;
        this._checkRules(ruleField, schema[field]);
      }
    }
    return this.errors;
  }

  private _checkRules(field: string, rules: string) {
    rules = rules.split("|");
    if (rules.length) {
      for (let ruleIndex in rules) {
        let tempRule = rules[ruleIndex].split(":");
        let rule = tempRule[0];
        let parameters = null;
        if (tempRule[1]) {
          parameters = tempRule[1].split(",");
        }

        // TODO - allow for array wildcards to check for validation in arrays
        // replaceAsterisksInParameters
        // TODO - we can sometimes know if a rule fails if its implicitly required, so we should check for that
        if (
          !this._getRule(rule).passes(
            this._getValue(field),
            parameters,
            this._data
          )
        ) {
          this.errors[field] = this._makeReplacements(
            this._getMessage(rule, field, parameters),
            rule,
            field,
            parameters
          );
          break;
        }
      }
    }
  }

  private _getRule(rule: string) {
    // TODO - we should merge the rules from their config so they can have custom rules
    return this._rules[rule];
  }

  private _makeReplacements(
    message: string,
    rule: string,
    field: string,
    parameters: any
  ) {
    let ruleFunctions = this._getRule(rule);
    // TODO - uncamel
    // TODO - if we see `values` we should grab all the values and display all them in a command list
    message = message.replace(":field", field.replace(".", " "));
    if (ruleFunctions.replacers) {
      ruleFunctions.replacers().forEach((replacer, index) => {
        message = message.replace(`:${replacer}`, parameters[index]);
      });
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

    // TODO - allow for custom messages
    // $customMessage = $this->getCustomMessageFromTranslator(
    //   $customKey = "validation.custom.{$attribute}.{$lowerRule}"
    // );

    if (this._sizeRules.indexOf(rule) > -1) {
      return this._getSizeMessage(field, rule);
    }

    return this._getMessageFromLocale(rule);
  }

  private _getSizeMessage(field: string, rule: string) {
    let value = getByDot(this._data, field);

    let type = "string";

    if (isObject(value)) {
      type = "file";
    } else if (isArray(value)) {
      type = "array";
    } else if (isNumeric(value)) {
      type = "numeric";
    }

    return $config.get(`validation.en.${rule}.${type}`);
  }

  private _getMessageFromLocale(rule: string) {
    let locale = $config.get("app.locale");
    return $config.get(`validation.${locale}.${rule}`);
  }
}
