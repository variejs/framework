import Rules from './rules'
import { isObject } from 'util'
import { getByDot } from './../utilities'

export default class Validator {
  public errors = {}

  private _data: object
  private _rules = Rules
  private _schema: object
  private _messages: object

  private _sizeRules = [
    'Size', 'Between', 'min', 'max'
  ]

  private _fileRules = [
    'File', 'Image', 'Mimes', 'Mimetypes', 'min',
    'max', 'Size', 'Between', 'Dimensions',
  ]

  private _numericRules = ['numeric', 'integer']

  private _dependentRules = [
    'RequiredWith', 'RequiredWithAll', 'RequiredWithout', 'RequiredWithoutAll',
    'RequiredIf', 'RequiredUnless', 'Confirmed', 'Same', 'Different', 'Unique',
    'Before', 'After', 'BeforeOrEqual', 'AfterOrEqual',
  ]

  private _implicitRules = [
    'Required', 'Filled', 'RequiredWith', 'RequiredWithAll', 'RequiredWithout',
    'RequiredWithoutAll', 'RequiredIf', 'RequiredUnless', 'Accepted', 'Present',
  ]

  constructor (data: object, schema: object, messages: object) {
    this._data = data
    this._schema = schema
    this._messages = messages
  }

  public validate () {
    return this.validateSchema(this._schema)
  }

  private validateSchema (schema: any, key?: string) {
    for (let field in schema) {
      if (isObject(schema[field])) {
        this.validateSchema(schema[field], key ? `${key}.${field}` : field)
      } else {
        let ruleField = key ? `${key}.${field}` : field
        this._checkRules(ruleField, schema[field])
      }
    }
    return this.errors
  }

  private _checkRules (field: string, rules: string) {
    rules = rules.split('|')
    if (rules.length) {
      for (let ruleIndex in rules) {
        let tempRule = rules[ruleIndex].split(':')
        let rule = tempRule[0]
        let parameters = null
        if (tempRule[1]) {
          parameters = tempRule[1].split(',')
        }
        if (!this._getRule(rule).passes(this._getValue(field), parameters)) {
          this.errors[field] = this._makeReplacements(this._getMessage(rule, field, parameters), rule, field, parameters)
          break
        }
      }
    }
  }

  private _getRule(rule) {
    return this._rules[rule];
  }

  private _makeReplacements(message : string, rule : string, field : string, parameters : any) {
    let ruleFunctions = this._getRule(rule)
    message = message.replace(':field', field.replace('.', ' '));
    if(ruleFunctions.replacers) {
      ruleFunctions.replacers().forEach((replacer, index) => {
        message = message.replace(`:${replacer}`, parameters[index])
      })
    }
    return message;
  }

  private _getValue(field : string) {
    return getByDot(this._data, field)
  }

  private _getMessage (rule, field, parameters) {

    let customMessage = getByDot(this._messages, field)

    if(customMessage) {
      return customMessage;
    }

    // TODO - allow for custom messages
    // $customMessage = $this->getCustomMessageFromTranslator(
    //   $customKey = "validation.custom.{$attribute}.{$lowerRule}"
    // );

    if(this._sizeRules.indexOf(rule) > -1) {
      return this._getSizeMessage(field, rule);
    }

    // elseif (in_array($rule, $this->sizeRules)) {
    //   return $this->getSizeMessage($attribute, $rule);
    // }

    return this._getMessageFromLocale(rule);
  }

  private _getSizeMessage(field, rule) {
    // TODO - string / file / numeric / array
    return $config.get(`validation.en.${rule}.string`);
  }

  private _getMessageFromLocale(rule : string) {
    let locale = $config.get('app.locale');
    return $config.get(`validation.${locale}.${rule}`);
  }

}
