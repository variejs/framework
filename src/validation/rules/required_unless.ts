import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: Array<any>, data: {}): boolean {
    if (!value) {
      if (getByDot(data, parameters[0]) === parameters[1]) {
        return true;
      }
      return false;
    }
    return true;
  },

  replacers() {
    return ["other", "value"];
  }
};
