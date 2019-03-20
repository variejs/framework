export default {
  passes(value: any): boolean {
    return typeof value === "string";
  },
};
