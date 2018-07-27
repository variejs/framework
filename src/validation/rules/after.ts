import isAfter from "validator/lib/isAfter";

export default {
  passes(value: any, parameters: Array<any>) {
    if (value) {
      return isAfter(value, parameters[0]);
    }
  },

  replacers() {
    return ["date"];
  }
};
