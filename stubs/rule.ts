export default {
  passes(value: any, parameters = [], data: {}) {
    return true;
  },

  message() {
    return "This :field has this message to display";
  }
};
