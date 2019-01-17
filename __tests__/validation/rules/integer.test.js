import integer from "../../../src/validation/rules/integer";

test("test accepted", () => {
  let valid = [1, 1231, 123123123, 1231232131];

  let invalid = [1.1, "1.1", "12", 12313.14];

  valid.forEach(value => {
    expect(integer.passes(value)).toBe(true);
  });

  invalid.forEach(value => {
    expect(integer.passes(value)).toBe(false);
  });
});
