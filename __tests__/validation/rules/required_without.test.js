import required_without from "../../../src/validation/rules/required_without";

test("test accepted", () => {
  expect(
    required_without.passes("abc", ["name"], {
      name: "abc"
    })
  ).toBe(true);

  expect(
    required_without.passes("", ["name"], {
      name: ""
    })
  ).toBe(false);

  expect(
    required_without.passes("", ["name"], {
      name: "abc"
    })
  ).toBe(true);

  expect(
    required_without.passes("", ["name", "sir_name"], {
      name: "",
      sir_name: "test"
    })
  ).toBe(false);
});
