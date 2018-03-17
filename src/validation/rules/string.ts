export default {
  passes(value: any): Boolean {
    return typeof value === "string";
  }
};
