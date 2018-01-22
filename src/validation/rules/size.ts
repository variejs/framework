import { getByDot } from "./../../utilities";

export default {
  passes(value: any, parameters: [], data: {}): Boolean {
    // TODO - array or string, or file size
    return value.length === getByDot(data, parameters[0]).length;
  }
};
