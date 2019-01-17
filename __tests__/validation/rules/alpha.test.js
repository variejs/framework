import alpha from "../../../src/validation/rules/alpha";

test("test accepted", () => {
  let valid = ["abc", "ABC", "FoObar"];

  let invalid = ["abc1", "  foo  ", "", "ÄBC", "FÜübar", "Jön", "Heiß", "123"];

  valid.forEach(value => {
    expect(alpha.passes(value)).toBe(true);
  });

  invalid.forEach(value => {
    expect(alpha.passes(value)).toBe(false);
  });
});
