import { getByDot, isEmpty } from "./../../utilities";

// required_unless
export default {
  passes(value: any, parameters: Array<any>, data: {}): boolean {
    if (isEmpty(value)) {
      return getByDot(data, parameters[0]) === value;
    }
    return true;
  },

  replacers() {
    return ["other", "value"];
  }
};
