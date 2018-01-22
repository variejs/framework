import { isArray, isObject } from "util";
import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes: any) {
    if (value) {
      let max = attributes[0];

      if (isObject(value)) {
        return value.size <= max * 1024;
      } else if (isArray(value)) {
        return value.length <= max;
      }

      return isLength(value, { max: max });
    }
    return true;
  },

  replacers() {
    return ["max", "size"];
  }
};
