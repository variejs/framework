import { isBoolean } from "util";

export default {
  passes(value: any) {
    return isBoolean(value);
  }
};
