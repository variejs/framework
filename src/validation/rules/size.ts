export default {
  passes(value: { size: number }, attributes: Array<any>) {
    if (value) {
      let size = attributes[0];

      if (Array.isArray(value) || typeof value === "string") {
        return value.length === size;
      } else if (typeof value === "object") {
        return value.size / 1024 === size;
      }

      return value === size;
    }
    return true;
  },

  replacers() {
    return ["max", "size"];
  },
};
