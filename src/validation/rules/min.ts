import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes: any) {
    return isLength(value, { min: attributes[0] });
  },

  replacers() {
    return ["min"];
  }
};
