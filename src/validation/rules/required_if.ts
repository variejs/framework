import { getByDot, isEmpty } from "./../../utilities";

export default {
  passes(value: any, parameters, data: {}): boolean {
    if (isEmpty(value)) {
      let requiredValue = getByDot(data, parameters[0]);
      return (
        isEmpty(requiredValue) ||
        (!isEmpty(parameters[1]) && requiredValue !== parameters[1])
      );
    }
    return true;
  },

  replacers() {
    return ["other", "value"];
  }
};
