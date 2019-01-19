import isBefore from "validator/lib/isBefore";
import isISO8601 from "validator/lib/isISO8601";
import isRFC3339 from "validator/lib/isRFC3339";

export default {
  passes(value: any, parameters: Array<any>) {
    if (value) {
      if (isISO8601(value) || isRFC3339(value)) {
        return isBefore(value, parameters[0]);
      }
    }
    return false;
  },

  replacers() {
    return ["date"];
  }
};
