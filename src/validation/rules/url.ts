import * as isURL from "validator/lib/isURL";

export default {
  passes(value: any): Boolean {
    return isURL(value);
  }
};
