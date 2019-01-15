import isLength from "validator/lib/isLength";

export default {
  passes(value: { size: number }, attributes: Array<any>) {
    if (value) {
      let max = attributes[0];

      if (Array.isArray(value)) {
        return value.length <= max;
      } else if (typeof value === "object") {
        return value.size <= max * 1024;
      }

      return isLength(value, { max });
    }
    return true;
  },

  replacers() {
    return ["max", "size"];
  }
};
