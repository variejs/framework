import ValidationServiceInterface from "./ValidationServiceInterface";
export default class ValidationService implements ValidationServiceInterface {
    validate(data: object, schema: object, messages?: object): any;
}
