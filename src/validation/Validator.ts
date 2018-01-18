import Rules from "./rules";
import { isObject } from "util";

export default class Validator {
  public errors = {};

  private _data: object;
  private _rules = Rules;
  private _schema: object;
  private _messages: object;

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
        let params = null;
        if (tempRule[1]) {
          params = tempRule[1].split(",");
        }
        if (!this._rules[rule].passes(this._get(field), params)) {
          let errorMessage = this._rules[rule].message(params);
          this.errors[field] = errorMessage;
          break;
        }
      }
    }
  }

  // TODO - MOVE THIS TO A HELPER?
  private _get(path: string, defaultValue?: any) {
    let value = path.split(".").reduce(function(prev: object, curr: string) {
      return prev ? prev[curr] : undefined;
    }, this._data);

    return value !== undefined ? value : defaultValue;
  }
}
