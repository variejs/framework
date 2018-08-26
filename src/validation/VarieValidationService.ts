import Validation from "./Validation";
import { injectable, inject } from "inversify";
import ValidationServiceInterface from "./ValidationServiceInterface";

@injectable()
export default class ValidationService implements ValidationServiceInterface {
  private $config;

  constructor(@inject("$config") $config) {
    this.$config = $config;
  }

  public validate(data: object, schema: object, messages = {}) {
    return new Validation(data, schema, messages, this.$config).validate();
  }
}
