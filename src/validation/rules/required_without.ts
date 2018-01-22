import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: [], data: {}): Boolean {
    if (!value) {
      let required = true;
      parameters.forEach(parameter => {
        let parameterValue = getByDot(data, parameter);
        if (required === false || !parameterValue) {
          required = false;
        }
      });

      return required;
    }
    return true;
  },

  replacers() {
    return ["values"];
  }
};
