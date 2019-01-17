import before from "../../../src/validation/rules/before";

test("test accepted", () => {
  expect(before.passes("1999-11-22", ["1990-11-22"])).toBe(false);
  expect(before.passes("1989-11-22", ["1990-11-22"])).toBe(true);
  expect(before.passes("1989-13-11", ["1990-11-22"])).toBe(false);
  expect(before.passes("89-13-11", ["1990-11-22"])).toBe(false);
  expect(before.passes("11", ["1990-11-22"])).toBe(false);
});
