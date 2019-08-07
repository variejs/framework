import array from "../../../src/validation/rules/array";

test("test array rule", () => {
  let valid = [[1, 2, 3]];

  let invalid = ["  foo  ", {}];

  valid.forEach((value) => {
    expect(array.passes(value)).toBe(true);
  });

  invalid.forEach((value) => {
    expect(array.passes(value)).toBe(false);
  });
});
