export default class Validator {
    errors: {};
    private _rules;
    private _data;
    private _schema;
    private _messages;
    /**
     * The size related validation rules.
     *
     * @var array
     */
    private _sizeRules;
    constructor(data: object, schema: object, messages: object);
    validate(): {};
    private validateSchema(schema, key?);
    private _checkRules(field, rules);
    private _getRule(rule);
    private _makeReplacements(message, rule, field, parameters);
    private _getValue(field);
    private _getMessage(rule, field);
    private _getSizeMessage(field, rule);
    private _getMessageFromLocale(rule);
}
