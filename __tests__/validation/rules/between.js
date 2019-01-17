import between from "../../../src/validation/rules/between";

test("test accepted", () => {
  expect(between.passes(5, [1, 10])).toBe(true);
  expect(between.passes(123, [1, 10])).toBe(false);

  // act as a file
  expect(
    between.passes(
      {
        size: 3500000 // 3500 kb
      },
      [2000, 4000]
    )
  ).toBe(true);
  expect(
    between.passes(
      {
        size: 1500000 // 1500 kb
      },
      [2000, 4000]
    )
  ).toBe(false);
});
