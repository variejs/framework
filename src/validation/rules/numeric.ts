import isNumeric from "validator/lib/isNumeric";

export default {
  passes(value: any) {
    if (typeof value === "number") {
      return true;
    }
    return isNumeric(value);
  },
};
