export default class Validator {
    errors: {};
    private _data;
    private _rules;
    private _schema;
    private _messages;
    /**
     * The size related validation rules.
     *
     * @var array
     */
    private _sizeRules;
    /**
     * The validation rules that imply the field is required.
     *
     * @var array
     */
    private _implicitRules;
    /**
     * The validation rules which depend on other fields as parameters.
     *
     * @var array
     */
    protected $dependentRules: string[];
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
