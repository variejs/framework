import ValidationServiceInterface from "../../validation/ValidationServiceInterface";
declare class Form {
    private _rules;
    private _messages;
    private _originalData;
    private _validator;
    constructor(data: object, validator?: ValidationServiceInterface);
    validation({rules, messages}: {
        rules: any;
        messages: any;
    }): this;
    isValid(): any;
    reset(): void;
    data(): {};
    setOriginaldata(): void;
    isDirty(): boolean;
}
export default Form;
