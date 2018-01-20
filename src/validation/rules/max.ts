import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes: any) {
    return isLength(value, { max: attributes[0] });
  },

  message() {
    return `The :attribute length is :max. Your :input is length :value`;
  },

  replacers() {
    return ['max']
  }
};
