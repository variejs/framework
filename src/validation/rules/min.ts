import isLength from "validator/lib/isLength";

export default {
  passes(value: { size: number }, attributes: Array<any>) {
    if (value) {
      let min = attributes[0];

      if (Array.isArray(value)) {
        return value.length >= min;
      } else if (typeof value === "object") {
        return value.size >= min * 1024;
      }

      return isLength(value, { min: min });
    }
    return true;
  },

  replacers() {
    return ["min"];
  }
};
