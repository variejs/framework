import confirmed from "../../../src/validation/rules/confirmed";

test("test confirmed rule", () => {
  expect(
    confirmed.passes(
      "abc",
      [],
      {
        password: "abc",
        password_confirmation: "abc",
      },
      "password",
    ),
  ).toBe(true);

  expect(
    confirmed.passes(
      "abc",
      [],
      {
        password: "abc",
        password_confirmation: "abcd",
      },
      "password",
    ),
  ).toBe(false);

  expect(
    confirmed.passes(
      "abc",
      [],
      {
        password: "abc",
      },
      "password",
    ),
  ).toBe(false);
});
