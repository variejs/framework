import * as Ajv from "Ajv";
import { injectable } from "inversify";
import ValidationServiceInterface from "./ValidationServiceInterface";

@injectable()
export default class ValidationService implements ValidationServiceInterface {
  private _validator: Ajv;

  constructor() {
    this._validator = new Ajv({
      allErrors: true,
      format: "full"
    });
  }

  public validate(data: object, schema: object, messages: object) {
    let validate = this._validator.compile(schema);
    if (!this._validator.validate(schema, data)) {
      let errors = {};

      validate.errors.map(function(error: {
        keyword: string;
        dataPath: string;
        schemaPath: string;
        params: {
          type: string;
          missingProperty: string;
        };
        message: string;
      }) {
        let param = "";
        let message = "";

        switch (error.keyword) {
          case "required":
            param = error.params.missingProperty;
            message = `${param} is required.`;
            break;
          default:
            param = error.dataPath.substring(1);
            message = `${param} ${error.message.toLowerCase()}`;
            break;
        }

        errors[param] = message;

        if (messages[param]) {
          errors[param] = messages[param];
        }
      });

      return errors;
    }
    return true;
  }
}
