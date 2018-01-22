import { isArray, isObject } from "util";
import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, parameters: []): Boolean {
    if (value) {
      let size = parameters[0];

      if (isObject(value)) {
        return value.size === size * 1024;
      } else if (isArray(value)) {
        return value.length === size;
      }

      return isLength(value, size);
    }
    return true;
  }
};
