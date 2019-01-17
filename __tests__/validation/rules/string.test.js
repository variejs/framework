import string from "../../../src/validation/rules/string";

test("test accepted", () => {
  expect(string.passes("abc")).toBe(true);
  expect(string.passes(123)).toBe(false);
  expect(string.passes("123")).toBe(true);
});
