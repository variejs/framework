import before_or_equal from "../../../src/validation/rules/before_or_equal";

test("test before or equal rule", () => {
  expect(before_or_equal.passes("1999-11-23", ["1990-11-22"])).toBe(false);
  expect(before_or_equal.passes("1990-11-22", ["1990-11-22"])).toBe(true);
  expect(before_or_equal.passes("1990-11-21", ["1990-11-22"])).toBe(true);
  expect(before_or_equal.passes("1990-11-20", ["1990-11-22"])).toBe(true);
});
