import isURL from "validator/lib/isURL";

export default {
  passes(value: any): boolean {
    return isURL(value);
  }
};
