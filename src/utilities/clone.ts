import * as cloneDeep from "clone-deep";

export default function clone(data: object) {
  return cloneDeep(data);
}
