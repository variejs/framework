import date from "../../../src/validation/rules/date";

test("test date rule", () => {
  expect(date.passes("1999-11-22")).toBe(true);
  expect(date.passes("89-13-11")).toBe(false);
  expect(date.passes("11")).toBe(false);
});
