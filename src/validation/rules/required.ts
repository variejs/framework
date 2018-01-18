export default {
  passes(value: any): Boolean {
    return !!value;
  },
  message() {
    return "Field is required.";
  }
};
