import required_with from "../../../src/validation/rules/required_with";

test("test accepted", () => {
  expect(
    required_with.passes("abc", ["name"], {
      name: "abc"
    })
  ).toBe(true);

  expect(
    required_with.passes("", ["name"], {
      name: "abc"
    })
  ).toBe(false);

  expect(
    required_with.passes("", ["name", "sir_name"], {
      name: "",
      sir_name: "test"
    })
  ).toBe(false);
});
