import isISO8601 from "validator/lib/isISO8601";
import isRFC3339 from "validator/lib/isRFC3339";

export default {
  passes(value: any) {
    if (value) {
      return value instanceof Date || isISO8601(value) || isRFC3339(value);
    }
  },
};
