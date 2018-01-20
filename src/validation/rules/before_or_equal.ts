import * as toDate from "validator/lib/toDate";
import * as isBefore from "validator/lib/isBefore";

export default {
  passes(value: any, parameters : any) {
    let date = toDate(parameters[0]);
    if(value) {
      date.setDate(date.getDate() + 1);
      return isBefore(value, date.toLocaleDateString("en-US"));
    }
  },

  replacers() {
    return ['date'];
  }
};
