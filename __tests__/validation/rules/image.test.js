import image from "../../../src/validation/rules/image";

test("test image rule", () => {
  let valid = ["jpg", "svg", "jpeg", "png", "bmp", "gif"];

  let invalid = ["blah", "mp4", "pdf"];

  valid.forEach(value => {
    expect(
      image.passes({
        name: `some_name.${value}`
      })
    ).toBe(true);
  });

  valid.forEach(value => {
    expect(
      image.passes({
        type: `${value}`
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

  // invalid.forEach(value => {
  //   expect(
  //     image.passes({
  //       type: `${value}`
  //     })
  //   ).toBe(false);
  // });
});
