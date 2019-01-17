import different from "../../../src/validation/rules/different";

test("test accepted", () => {
  expect(
    different.passes("abcd", ["name"], {
      name: "abc"
    })
  ).toBe(true);
  expect(
    different.passes("abc", ["name"], {
      name: "abc"
    })
  ).toBe(false);
});
