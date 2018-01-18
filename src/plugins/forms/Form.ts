import Vue from "vue";
import ValidationServiceInterface from "../../validation/ValidationServiceInterface";

class Form {
  private _schema: object;
  private _messages: object;
  private _originalData: any;
  private _validator: ValidationServiceInterface;

  constructor(data: object, validator?: ValidationServiceInterface) {
    if (validator) {
      this._validator = validator;
    }
    for (const field in data) {
      this[field] = data[field];
    }
    this.setOriginaldata();
  }

  public validation({ schema, messages }) {
    this._schema = schema;
    this._messages = messages;
    return this;
  }

  public isValid() {
    if (this._validator) {
      return this._validator.validate(this, this._schema, this._messages);
    }
    return true;
  }

  public reset() {
    for (const field in this._originalData) {
      Vue.set(this, field, this._originalData[field]);
    }
    this.setOriginaldata();
  }

  public data() {
    let data = {};
    let tempData = Object.assign({}, this);
    for (const field in tempData) {
      if (field.indexOf("_") != 0) {
        data[field] = JSON.parse(JSON.stringify(this[field]));
      }
    }
    return data;
  }

  public setOriginaldata() {
    this._originalData = Object.assign({}, this.data());
  }

  public isDirty() {
    return JSON.stringify(this.data()) === JSON.stringify(this._originalData);
  }
}

export default Form;
