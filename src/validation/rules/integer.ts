import * as isInt from "validator/lib/isInt";

export default {
  passes(value: any) {
    return isInt(value);
  }
};
