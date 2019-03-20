import numeric from "../../../src/validation/rules/numeric";

test("test numeric rule", () => {
  let valid = [1, 2.15, 123];

  let invalid = ["  foo  "];

  valid.forEach(value => {
    expect(numeric.passes(value)).toBe(true);
  });

  invalid.forEach(value => {
    expect(numeric.passes(value)).toBe(false);
  });
});
