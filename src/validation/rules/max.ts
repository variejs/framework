export default {
  passes(value: { size: number }, attributes: Array<any>) {
    if (value) {
      let max = attributes[0];

      if (Array.isArray(value) || typeof value === "string") {
        return value.length <= max;
      } else if (typeof value === "object") {
        return value.size / 1024 <= max;
      }

      return value <= max;
    }
    return true;
  },

  replacers() {
    return ["max", "size"];
  },
};
