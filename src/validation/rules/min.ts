export default {
  passes(value: { size: number }, attributes: Array<any>) {
    if (value) {
      let min = attributes[0];

      if (Array.isArray(value) || typeof value === "string") {
        return value.length >= min;
      } else if (typeof value === "object") {
        return value.size / 1024 >= min;
      }

      return value >= min;
    }
    return true;
  },

  replacers() {
    return ["min"];
  },
};
