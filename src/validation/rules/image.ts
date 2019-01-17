// TODO - we should accept a file instead
export default {
  passes(value: any) {
    if (value) {
      return new RegExp(/\.(jpg|svg|jpeg|png|bmp|gif)$/i).test(value.name);
    }
    return true;
  }
};
