export default {
  passes(value: any, parameters: any) {
    return Number(parameters[0]) <= value && Number(parameters[1]) >= value;
  },

  replacers() {
    return ["min", "max"];
  }
};
