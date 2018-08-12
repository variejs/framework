import { isEmpty } from "./../../utilities";

export default {
  passes(value: any): boolean {
    return !isEmpty(value);
  }
};
