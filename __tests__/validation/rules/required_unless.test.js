import required_unless from "../../../src/validation/rules/required_unless";

test("test accepted", () => {
  expect(
    required_unless.passes("abc", ["name", "abc"], {
      name: "abc"
    })
  ).toBe(true);

  expect(
    required_unless.passes("", ["name", "abc"], {
      name: "abc"
    })
  ).toBe(false);

  expect(
    required_unless.passes("", ["name"], {
      name: "abc"
    })
  ).toBe(false);

  expect(
    required_unless.passes("", ["name"], {
      name: ""
    })
  ).toBe(true);
});
