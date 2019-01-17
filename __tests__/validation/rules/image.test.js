import image from "../../../src/validation/rules/image";

test("test accepted", () => {
  let valid = ["jpg", "svg", "jpeg", "png", "bmp", "gif"];

  let invalid = ["blah", "mp4", "pdf"];

  valid.forEach(value => {
    expect(
      image.passes({
        name: `some_name.${value}`
      })
    ).toBe(true);
  });

  invalid.forEach(value => {
    expect(
      image.passes({
        name: `some_name.${value}`
      })
    ).toBe(false);
  });
});
