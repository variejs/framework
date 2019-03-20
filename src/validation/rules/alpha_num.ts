import isAlphanumeric from "validator/lib/isAlphanumeric";

export default {
  passes(value: any) {
    return isAlphanumeric(value);
  }
};
