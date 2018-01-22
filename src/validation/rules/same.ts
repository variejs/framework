import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: [], data: {}): Boolean {
    return value === getByDot(data, parameters[0]);
  },

  replacers() {
    return ["other"];
  }
};
