import isDate from "./date";
import isBefore from "validator/lib/isBefore";

export default {
  passes(value: any, parameters: Array<any>) {
    if (value && isDate.passes(value)) {
      return isBefore(value, parameters[0]);
    }
    return false;
  },

  replacers() {
    return ["date"];
  },
};
