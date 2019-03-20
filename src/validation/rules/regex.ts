export default {
  passes(value: any, parameters: Array<any>) {
    let regex = parameters[0];

    if (regex instanceof RegExp) {
      return regex.test(value);
    } else if (typeof regex === "string") {
      return new RegExp(regex).test(String(value));
    }

    return false;
  }
};
