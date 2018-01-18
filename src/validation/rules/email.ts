import * as isEmail from "validator/lib/isEmail";

export default {
  passes(value: any) {
    return isEmail(value);
  },

  message() {
    return "Not an email.";
  }
};
