export default {
  passes(value: any) {
    return value === true || value === false || value == 0 || value == 1;
  }
};
