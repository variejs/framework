import isNumeric from "validator/lib/isNumeric";

export default {
  passes(value: any) {
    return isNumeric(value);
  }
};
