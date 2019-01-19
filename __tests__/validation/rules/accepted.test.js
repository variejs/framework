import accepted from "../../../src/validation/rules/accepted";

test("test accepted rule", () => {
  expect(accepted.passes(1)).toBe(true);
  expect(accepted.passes(true)).toBe(true);
  expect(accepted.passes("yes")).toBe(true);

  expect(accepted.passes("1")).toBe(false);
  expect(accepted.passes("true")).toBe(false);
});
