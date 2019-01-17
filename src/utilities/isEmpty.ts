export default function(value: object | string | null | Array<any>) {
  //check for empty object {}, array []
  if (value !== null && typeof value === "object") {
    if (Object.keys(value).length === 0) {
      return true;
    }
  } else if (
    value == null ||
    (typeof value === "string" && value.replace(/\s+/, "") === "")
  ) {
    //check for undefined, null and ""
    return true;
  }

  return false;
}
