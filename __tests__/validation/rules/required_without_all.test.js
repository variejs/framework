import required_without_all from "../../../src/validation/rules/required_without_all";

test("test without all rule", () => {
  expect(
    required_without_all.passes("abc", ["name"], {
      name: "abc",
    }),
  ).toBe(true);

  expect(
    required_without_all.passes("", ["name"], {
      name: "abc",
    }),
  ).toBe(true);

  expect(
    required_without_all.passes("", ["name", "sir_name"], {
      name: "",
      sir_name: "test",
    }),
  ).toBe(true);

  expect(
    required_without_all.passes("", ["name", "sir_name"], {
      name: "asdfasdf",
      sir_name: "test",
    }),
  ).toBe(true);

  expect(
    required_without_all.passes("", ["name", "sir_name"], {
      name: "",
      sir_name: "",
    }),
  ).toBe(false);
});
