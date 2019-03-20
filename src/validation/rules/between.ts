export default {
  passes(value: { size: number }, parameters: Array<number>) {
    if (value) {
      let min = parameters[0];
      let max = parameters[1];

      if (Array.isArray(value) || typeof value === "string") {
        return min <= value.length && max >= value.length;
      } else if (typeof value === "object") {
        return min <= value.size / 1024 && max >= value.size / 1024;
      }

      return min <= value && max >= value;
    }
  },

  replacers() {
    return ["min", "max"];
  }
};
