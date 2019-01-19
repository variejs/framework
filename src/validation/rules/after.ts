import isDate from './date'
import isAfter from "validator/lib/isAfter";

export default {
  passes(value: any, parameters: Array<any>) {
    if (value && isDate.passes(value)) {
      return isAfter(value, parameters[0]);
    }
    return false;
  },

  replacers() {
    return ["date"];
  }
};
