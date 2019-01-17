import size from "../../../src/validation/rules/size";

test("test accepted", () => {
  expect(size.passes(9, [10])).toBe(false);
  expect(size.passes(10, [10])).toBe(true);
  expect(size.passes(123, [10])).toBe(false);

  // act as a file
  expect(
    size.passes(
      {
        size: 3500000 // 3500 kb
      },
      [4000]
    )
  ).toBe(false);

  expect(
    size.passes(
      {
        size: 4096000 // 4000 kb
      },
      [4000]
    )
  ).toBe(true);

  expect(
    size.passes(
      {
        size: 5500000 // 5500 kb
      },
      [4000]
    )
  ).toBe(false);
});
