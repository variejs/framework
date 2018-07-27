import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: Array<any>, data: {}): Boolean {
    if (!value) {
      let validLength = 0;
      parameters.forEach(parameter => {
        let parameterValue = getByDot(data, parameter);
        if (parameterValue) {
          validLength++;
        }
      });
      if (validLength === parameters.length) {
        return false;
      }
    }
    return true;
  },

  replacers() {
    return ["values"];
  }
};
