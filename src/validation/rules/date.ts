import toDate from "validator/lib/toDate";

export default {
  passes(value: any) {
    if (value) {
      return toDate(value) ? true : false;
    }
  }
};
