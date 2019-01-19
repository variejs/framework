import isDate from "./date"
import isAfter from "validator/lib/isAfter";
import isBefore from "validator/lib/isBefore";

export default {
  passes(value: any, parameters: Array<any>) {
    if (value && isDate.passes(value)) {
        return (
          isAfter(value, parameters[0]) ||
          (!isAfter(value, parameters[0]) && !isBefore(value, parameters[0]))
        );
    }
    return false;
  },

  replacers() {
    return ["date"];
  }
};
