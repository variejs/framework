import Validator from "./Validator";
import { injectable } from "inversify";
import ValidationServiceInterface from "./ValidationServiceInterface";

@injectable()
export default class ValidationService implements ValidationServiceInterface {
  public validate(data: object, schema: object, messages = {}) {
    return new Validator(data, schema, messages).validate();
  }
}
