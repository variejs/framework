import ValidationServiceInterface from "../../validation/ValidationServiceInterface";
declare class Form {
    rules: object;
    messages: object;
    private _originalData;
    private _validator;
    constructor(data: object, validator?: ValidationServiceInterface);
    validation({rules, messages}: {
        rules: any;
        messages: any;
    }): this;
    isValid(): boolean;
    errors(): any;
    reset(): void;
    data(): {};
    setOriginaldata(): void;
    isDirty(): boolean;
}
export default Form;
