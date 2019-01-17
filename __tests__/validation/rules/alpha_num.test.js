import alpha_num from "../../../src/validation/rules/alpha_num";

test("test accepted", () => {
  let valid = ["abc123", "ABC11", "123"];

  let invalid = ["  foo  ", "", "ÄBC", "FÜübar", "Jön", "Heiß"];

  valid.forEach(value => {
    expect(alpha_num.passes(value)).toBe(true);
  });

  invalid.forEach(value => {
    expect(alpha_num.passes(value)).toBe(false);
  });
});
