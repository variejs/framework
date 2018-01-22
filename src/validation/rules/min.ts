import { isArray, isObject } from "util";
import * as isLength from "validator/lib/isLength";
import * as isNumeric from "validator/lib/isNumeric";

export default {
  passes(value: any, attributes: any) {
    if (value) {
      let min = attributes[0];

      if (isObject(value)) {
        return value.size >= min * 1024;
      } else if (isArray(value)) {
        return value.length >= min;
      }

      return isLength(value, { min: min });
    }
    return true;
  },

  replacers() {
    return ["min", "size"];
  }
};
