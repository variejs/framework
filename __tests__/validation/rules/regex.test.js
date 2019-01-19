import regex from "../../../src/validation/rules/regex";

test("test regex rule", () => {
  let valid = [/^[A-Za-z0-9]+$/, "^[A-Za-z0-9]+$"];

  let invalid = [/abc/, "abc"];

  valid.forEach(value => {
    expect(regex.passes("ABC123", [value])).toBe(true);
  });

  valid.forEach(value => {
    expect(regex.passes("...FAIL...", [value])).toBe(false);
  });

  invalid.forEach(value => {
    expect(regex.passes("...FAIL...", [value])).toBe(false);
  });
});
