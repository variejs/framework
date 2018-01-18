declare class Form {
    private validator;
    constructor(data: any);
    validation({schema, messages}: {
        schema: any;
        messages: any;
    }): this;
    isValid(): any;
}
export default Form;
