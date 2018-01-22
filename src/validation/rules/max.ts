import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes: any) {
    return isLength(value, { max: attributes[0] });
  },

  replacers() {
    return ["max", "size"];
  }
};
