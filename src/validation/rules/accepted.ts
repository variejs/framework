export default {
  passes(value: any) {
    let validValues = ["yes", "on", 1, true];

    return validValues.indexOf(value) > -1;
  },
};
