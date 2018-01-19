export default class Validator {
    errors: {};
    private _data;
    private _rules;
    private _schema;
    private _messages;
    constructor(data: object, schema: object, messages: object);
    validate(): {};
    private validateSchema(schema, key?);
    private _checkRules(field, rules);
}
