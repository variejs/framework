import * as isAfter from "validator/lib/isAfter";

export default {
  passes(value: any, parameters: any) {
    if (value) {
      return isAfter(value, parameters[0]);
    }
  },

  replacers() {
    return ["date"];
  }
};
