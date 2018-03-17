import isEmpty from "../../utilities/isEmpty";

export default {
  validatesAll: true,
  passes(value: any) {
    return isEmpty(value);
  }
};
