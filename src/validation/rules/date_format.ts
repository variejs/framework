import * as toDate from "validator/lib/toDate";

export default {
  passes(value: any, parameters: any) {
    if (value && toDate(value)) {
      console.info(parameters);
      console.info(toDate(value));
      // return  ? true : false;
      return false;
    }
  }
};
