import min from "../../../src/validation/rules/min";

test("test accepted", () => {
  expect(min.passes(9, [10])).toBe(false);
  expect(min.passes(10, [10])).toBe(true);
  expect(min.passes(123, [10])).toBe(true);

  expect(
    min.passes(
      {
        size: 3500000 // 3500 kb
      },
      [4000]
    )
  ).toBe(false);

  expect(
    min.passes(
      {
        size: 4096000 // 4000 kb
      },
      [4000]
    )
  ).toBe(true);

  expect(
    min.passes(
      {
        size: 5500000 // 5500 kb
      },
      [4000]
    )
  ).toBe(true);
});
