import * as isBefore from "validator/lib/isBefore";

export default {
  passes(value: any, parameters: Array<any> = []) {
    if (value) {
      return isBefore(value, parameters[0]);
    }
  },

  replacers() {
    return ["date"];
  }
};
