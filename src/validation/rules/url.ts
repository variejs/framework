import * as isUrl from "validator/lib/isUrl";

export default {
  passes(value: any): Boolean {
    return isUrl(value);
  }
};
