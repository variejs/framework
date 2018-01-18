import ValidationServiceInterface from "./ValidationServiceInterface";
export default class ValidationService implements ValidationServiceInterface {
    constructor();
    validate(data: object, schema: object, messages: object): void;
}
