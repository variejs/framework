import toDate from "validator/lib/toDate";
import isAfter from "validator/lib/isAfter";

export default {
  passes(value: any, parameters: Array<any>) {
    let date = toDate(parameters[0]);
    if (value) {
      date.setDate(date.getDate() - 1);
      return isAfter(value, date.toLocaleDateString("en-US"));
    }
  },

  replacers() {
    return ["date"];
  }
};
