import nullable from "../../../src/validation/rules/nullable";

test("test nullable rule", () => {
  let valid = ["", "   ", {}, [], undefined, null];

  let invalid = ["  foo  ", { test: true }, [1]];

  valid.forEach((value) => {
    expect(nullable.passes(value)).toBe(true);
  });

  invalid.forEach((value) => {
    expect(nullable.passes(value)).toBe(false);
  });
});
