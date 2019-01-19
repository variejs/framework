import after from "../../../src/validation/rules/after";

test("test after rule", () => {
  expect(after.passes("1999-11-22", ["1990-11-22"])).toBe(true);
  expect(after.passes("1989-11-22", ["1990-11-22"])).toBe(false);
  expect(after.passes("1989-13-11", ["1990-11-22"])).toBe(false);
  expect(after.passes("89-13-11", ["1990-11-22"])).toBe(false);
  expect(after.passes("11", ["1990-11-22"])).toBe(false);
});
