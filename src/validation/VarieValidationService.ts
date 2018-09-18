import Validation from "./Validation";
import { injectable, inject } from "inversify";
import ValidationServiceInterface from "./ValidationServiceInterface";

@injectable()
export default class ValidationService implements ValidationServiceInterface {
  private configService;

  constructor(@inject("ConfigService") configService) {
    this.configService = configService;
  }

  public validate(data: object, schema: object, messages = {}) {
    return new Validation(
      data,
      schema,
      messages,
      this.configService
    ).validate();
  }
}
