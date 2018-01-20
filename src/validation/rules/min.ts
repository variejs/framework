import * as isLength from "validator/lib/isLength";

export default {
  passes(value: any, attributes: any) {
    return isLength(value, { min: attributes[0] });
  },

  message() {
    return `The :attribute length is :min. Your :input is length :value`;
  },

  replacers() {
    return ['min']
  }
};
