import Vue from "vue";
import filterEmpty from "./../../utilities/filterEmpty";
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
    this.fill(data);
    this.setAsOriginalData();
  }

  public fill(data) {
    for (let key in data) {
      Vue.set(this, key, data[key]);
    }
    return this;
  }

  public merge(data) {
    for (let key in data) {
      if (this.hasOwnProperty(key)) {
        Vue.set(this, key, data[key]);
      }
    }
    return this;
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

  public data() {
    let data = {};
    let tempData = Object.assign({}, this);
    for (let field in tempData) {
      if (field.indexOf("_") != 0) {
        data[`${field}`] = this[field];
      }
    }
    return filterEmpty(data);
  }

  public setAsOriginalData() {
    this._originalData = this.data();
    return this;
  }

  public reset() {
    for (let field in this.data()) {
      this.remove(field);
    }
    this.fill(this._originalData);
    return this;
  }

  public remove(key) {
    Vue.delete(this, key);
    return this;
  }

  public errors() {
    return this._validator.validate(this.data(), this._rules, this._messages);
  }

  public isDirty() {
    return JSON.stringify(this.data()) !== JSON.stringify(this._originalData);
  }
}

export default Form;
