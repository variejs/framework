export default {
  passes(value: any, parameters: Array<any>) {
    let regex = parameters[0];
    if (regex instanceof RegExp) {
      return regex.test(value);
    }

    return new RegExp(regex, parameters[1] ? parameters[1] : "").test(
      String(value)
    );
  }
};
