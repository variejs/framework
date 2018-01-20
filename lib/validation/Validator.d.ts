export default class Validator {
    errors: {};
    private _data;
    private _rules;
    private _schema;
    private _messages;
    private _sizeRules;
    private _fileRules;
    private _numericRules;
    private _dependentRules;
    private _implicitRules;
    constructor(data: object, schema: object, messages: object);
    validate(): {};
    private validateSchema(schema, key?);
    private _checkRules(field, rules);
    private _getRule(rule);
    private _makeReplacements(message, rule, field, parameters);
    private _getValue(field);
    private _getMessage(rule, field, parameters);
    private _getSizeMessage(field, rule);
    private _getMessageFromLocale(rule);
}
