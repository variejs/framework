import isNumeric from "validator/lib/isNumeric";
import { getByDot, uncamelize } from "./../utilities";
import ConfigInterface from "../config/ConfigInterface";

export default class Validation {
  public errors: object = {};

  protected data: object;
  protected configService;
  protected schema: object;
  protected messages: object;
  protected rules: object = {};

  /**
   * The size related validation rules.
   *
   * @var array
   */
  protected sizeRules = ["between", "min", "max", "size"];

  constructor(
    data: object,
    schema: object,
    messages: object,
    configService: ConfigInterface,
  ) {
    this.data = data;
    this.schema = schema;
    this.messages = messages;
    this.configService = configService;
    this.rules = this.configService.get("validation.rules");
  }

  public validate() {
    return this.validateSchema(this.schema);
  }

  protected validateSchema(schema: any, key?: string) {
    for (let field in schema) {
      if (typeof schema[field] === "object") {
        this.validateSchema(schema[field], key ? `${key}.${field}` : field);
      } else {
        let ruleField = key ? `${key}.${field}` : field;
        this.checkRules(ruleField, schema[field]);
      }
    }
    return this.errors;
  }

  protected checkRules(field: string, rules: string) {
    let rulesArray = rules.split("|");
    if (rulesArray.length) {
      for (let ruleIndex in rulesArray) {
        let tempRule = rulesArray[ruleIndex].split(":");
        let rule = tempRule[0];
        let parameters: Array<any> = [];
        if (tempRule[1]) {
          parameters = tempRule[1].split(",");
        }

        let ruleClass = this.getRule(rule);
        if (ruleClass === undefined) {
          throw `We cannot find the rule ${rule}`;
        }

        if (
          !ruleClass.passes(
            this.getValue(field),
            parameters,
            this.data,
            field,
          ) &&
          rule !== "nullable"
        ) {
          this.errors[field] = this.makeReplacements(
            this.getMessage(rule, field),
            rule,
            field,
            parameters,
          );
          break;
        }

        if (rule === "nullable") {
          break;
        }
      }
    }
  }

  protected getRule(rule: string) {
    return this.rules[rule];
  }

  protected makeReplacements(
    message: string,
    rule: string,
    field: string,
    parameters: any,
  ) {
    let ruleFunctions = this.getRule(rule);
    if (!message) {
      return `The ${field} fails the validation.`;
    }
    message = message.replace(":field", uncamelize(field.replace(".", "s ")));
    if (ruleFunctions.replacers) {
      ruleFunctions.replacers().forEach((replacer: string, index: number) => {
        if (parameters[index]) {
          message = message.replace(
            `:${replacer}`,
            uncamelize(parameters[index].replace(".", "s ")),
          );
        }
      });
    }

    if (message.indexOf(":values") > -1) {
      message.replace(":values", parameters.join(", "));
    }

    return message;
  }

  protected getValue(field: string) {
    return getByDot(this.data, field);
  }

  protected getMessage(rule: string, field: string) {
    let customMessage = getByDot(this.messages, field);

    if (customMessage) {
      return customMessage;
    }

    if (this.sizeRules.indexOf(rule) > -1) {
      return this.getSizeMessage(field, rule);
    }

    let tempRule = this.getRule(rule).message;
    if (tempRule) {
      return tempRule();
    }

    return this.getMessageFromLocale(rule);
  }

  protected getSizeMessage(field: string, rule: string) {
    let type = "string";
    let locale = this.configService.get("app.locale");
    let value = getByDot(this.data, field);

    if (typeof value === "object") {
      type = "file";
    } else if (Array.isArray(value)) {
      type = "array";
    } else if (isNumeric(value)) {
      type = "numeric";
    }

    return this.configService.get(`validation.${locale}.${rule}.${type}`);
  }

  protected getMessageFromLocale(rule: string) {
    let locale = this.configService.get("app.locale");
    return this.configService.get(`validation.${locale}.${rule}`);
  }
}
