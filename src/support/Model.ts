import Vue from "vue";

export default class Model {
  constructor(data: object) {
    this.defaults();
    Object.assign(this, data);
  }

  protected defaults() {
    // place defaults here
  }
}
