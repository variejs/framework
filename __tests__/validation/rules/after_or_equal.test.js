import after_or_equal from "../../../src/validation/rules/after_or_equal";

test("test after or equal rule", () => {
  expect(after_or_equal.passes("1999-11-23", ["1990-11-22"])).toBe(true);
  expect(after_or_equal.passes("1990-11-22", ["1990-11-22"])).toBe(true);
  expect(after_or_equal.passes("1990-11-21", ["1990-11-22"])).toBe(false);
  expect(after_or_equal.passes("1990-11-20", ["1990-11-22"])).toBe(false);
});
