import required_if from "../../../src/validation/rules/required_if";

test("test accepted", () => {
  expect(
    required_if.passes("asdfadsf", ["name", "abc"], {
      name: "abc"
    })
  ).toBe(true);

  expect(
    required_if.passes("", ["name", "abc"], {
      name: "abc"
    })
  ).toBe(false);

  expect(
    required_if.passes("", ["name"], {
      name: "abc"
    })
  ).toBe(false);

  expect(
    required_if.passes("", ["name"], {
      name: null
    })
  ).toBe(true);
});
