import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: Array<any>, data: {}): boolean {
    return value !== getByDot(data, parameters[0]);
  },

  replacers() {
    return ["other"];
  }
};
