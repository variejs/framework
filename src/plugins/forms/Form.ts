import Vue from "vue";
import ValidationServiceInterface from "../../validation/ValidationServiceInterface";

class Form {
  public _rules: object = {};
  public _messages: object = {};

  private _originalData: any;

  protected _validator;

  constructor(data: object, validationService?: ValidationServiceInterface) {
    if (validationService) {
      this._validator = validationService;
    }

    Object.assign(this, data);

    this.setOriginalData();
  }

  public fill(data) {
    for (let key in data) {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
    this.setOriginalData();
  }

  public validation({ rules, messages }) {
    this._rules = rules;
    this._messages = messages;
    return this;
  }

  public isValid() {
    if (this._validator) {
      let errors = this._validator.validate(
        this.data(),
        this._rules,
        this._messages
      );
      if (Object.keys(errors).length) {
        return false;
      }
    }
    return true;
  }

  public errors() {
    return this._validator.validate(this.data(), this._rules, this._messages);
  }

  public reset() {
    for (let field in this._originalData) {
      Vue.set(this, field, this._originalData[field]);
    }
    this.setOriginalData();
  }

  public data() {
    let data = {};
    let tempData = Object.assign({}, this);
    for (let field in tempData) {
      if (field.indexOf("_") != 0) {
        data[`${field}`] = this[field];
      }
    }
    return data;
  }

  public setOriginalData() {
    this._originalData = Object.assign({}, this.data());
  }

  public isDirty() {
    return JSON.stringify(this.data()) !== JSON.stringify(this._originalData);
  }
}

export default Form;
