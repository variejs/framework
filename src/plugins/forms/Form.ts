import Vue from "vue";
import ValidationServiceInterface from "../../validation/ValidationServiceInterface";

class Form {
  public rules: object;
  public messages: object;

  private _originalData: any;
  private _validator: ValidationServiceInterface;

  constructor(data: object, validator?: ValidationServiceInterface) {
    if (validator) {
      this._validator = validator;
    }

    Object.assign(this, data);

    this.setOriginaldata();
  }

  public validation({ rules, messages }) {
    this.rules = rules;
    this.messages = messages;
    return this;
  }

  public isValid() {
    if (this._validator) {
      let errors = this._validator.validate(
        this.data(),
        this.rules,
        this.messages
      );
      if (Object.keys(errors).length) {
        return false;
      }
    }
    return true;
  }

  public errors() {
    return this._validator.validate(this.data(), this.rules, this.messages);
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
        data[field] = this[field];
      }
    }
    return data;
  }

  public setOriginaldata() {
    this._originalData = Object.assign({}, this.data());
  }

  public isDirty() {
    return JSON.stringify(this.data()) !== JSON.stringify(this._originalData);
  }
}

export default Form;
