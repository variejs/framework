import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: [], data: {}): Boolean {
    if (!value) {
      let required = false;
      parameters.forEach(parameter => {
        let parameterValue = getByDot(data, parameter);
        if (required === true || parameterValue) {
          required = true;
        }
      });
      return !required;
    }
    return true;
  },

  replacers() {
    return ["values"];
  }
};
