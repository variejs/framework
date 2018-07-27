export default {
  passes(value: { size: number }, parameters: Array<number>) {
    if (value) {
      let min = parameters[0];
      let max = parameters[1];

      if (Array.isArray(value)) {
        return min <= value.length && max >= value.length;
      } else if (typeof value === "object") {
        let minSize = min * 1024;
        let maxSize = max * 1024;
        return minSize <= value.size && maxSize >= value.size;
      }

      return min <= value && max >= value;
    }
  },

  replacers() {
    return ["min", "max"];
  }
};
