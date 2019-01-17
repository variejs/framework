import boolean from "../../../src/validation/rules/boolean";

test("test boolean rule", () => {
  let valid = [true, false, 0, 1];

  let invalid = ["1", "0", 2, "abc"];

  valid.forEach(value => {
    expect(boolean.passes(value)).toBe(true);
  });

  invalid.forEach(value => {
    expect(boolean.passes(value)).toBe(false);
  });
});
