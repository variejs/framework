import { isEmpty } from "./../../utilities";

export default {
  passes(value: any): Boolean {
    return !isEmpty(value);
  }
};
