import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes?: any) {
    return isLength(value, { min: attributes[0] });
  },

  message(attributes: any) {
    return `Minimum Length is ${attributes[0]}.`;
  }
};
