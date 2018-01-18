import ValidationServiceInterface from "../../validation/ValidationServiceInterface";

class Form {
  private validator: ValidationServiceInterface;

  constructor(data) {
    for (const field in data) {
      this[field] = data[field];
    }
    this.validator = $app.make("$validator");
  }

  public validation({ schema, messages }) {
    this._schema = schema;
    this._messages = messages;
    return this;
  }

  public isValid() {
    return this.validator.validate(this, this._schema, this._messages);
  }
}

export default Form;
