import required from "../../../src/validation/rules/required";

test("test accepted", () => {
  expect(required.passes("abc")).toBe(true);
  expect(required.passes({ test: true })).toBe(true);
  expect(required.passes([1])).toBe(true);

  expect(required.passes("")).toBe(false);
  expect(required.passes({})).toBe(false);
  expect(required.passes([])).toBe(false);
  expect(required.passes(null)).toBe(false);
  expect(required.passes(undefined)).toBe(false);
});
