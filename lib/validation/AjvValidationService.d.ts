import ValidationServiceInterface from "./ValidationServiceInterface";
export default class ValidationService implements ValidationServiceInterface {
    private _validator;
    constructor();
    validate(data: object, schema: object, messages: object): {};
}
