export default {
  passes(value: any, parameters: Array<any>, formData : Object, currentField) {
    return formData[`${currentField}Confirmed`] === value;
  }
};
