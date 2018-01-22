import { isArray, isObject } from 'util'

export default {
  passes(value: any, parameters: any) {
    if(value) {

      let min = parameters[0];
      let max = parameters[1];

      if(isObject(value)) {
        let minSize = (min * 1024);
        let maxSize = (max * 1024);
        return  minSize <= value.size && maxSize >= value.size;
      }
      else if(isArray(value)) {
        return min <= value.length && max >= value.length
      }

      return min <= value && max >= value;
    }

  },

  replacers() {
    return ["min", "max"];
  }
};
