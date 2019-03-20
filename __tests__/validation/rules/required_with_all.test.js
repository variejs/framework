import required_with_all from "../../../src/validation/rules/required_with_all";

test("test required with all rule", () => {
  expect(
    required_with_all.passes("abc", ["name"], {
      name: "abc",
    }),
  ).toBe(true);

  expect(
    required_with_all.passes("", ["name"], {
      name: "abc",
    }),
  ).toBe(false);

  expect(
    required_with_all.passes("", ["name", "sir_name"], {
      name: "",
      sir_name: "test",
    }),
  ).toBe(true);

  expect(
    required_with_all.passes("", ["name", "sir_name"], {
      name: "asdfadsf",
      sir_name: "test",
    }),
  ).toBe(false);
});
