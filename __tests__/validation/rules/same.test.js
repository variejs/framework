import same from "../../../src/validation/rules/same";

test("test accepted", () => {
  let valid = ["abc"];

  let invalid = ["  foo  ", {}];

  valid.forEach(value => {
    expect(
      same.passes(value, ["name"], {
        name: "abc"
      })
    ).toBe(true);
  });

  invalid.forEach(value => {
    expect(
      same.passes(value, ["name"], {
        name: "abc"
      })
    ).toBe(false);
  });
});
