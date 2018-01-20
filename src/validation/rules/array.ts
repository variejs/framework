import { isArray } from 'util'

export default {
  passes(value: any) {
      return isArray(value);
  },
};
