import * as isAlpha from "validator/lib/isAlpha";

export default {
  passes(value: any) {
    return isAlpha(value);
  }
};
