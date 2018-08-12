import * as isLength from "validator/lib/isLength";

export default {
  passes(
    value: { size: number } | Array<any>,
    parameters: Array<number>
  ): boolean {
    if (value) {
      let size = parameters[0];

      if (Array.isArray(value)) {
        return value.length === size;
      } else if (typeof value === "object") {
        return value.size === size * 1024;
      }

      return isLength(value, size);
    }
    return true;
  }
};
