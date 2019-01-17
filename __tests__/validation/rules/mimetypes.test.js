import mimetypes from "../../../src/validation/rules/mimetypes";

class MockFile {
  constructor(type) {
    this.type = type;
  }
}

test("test accepted", () => {
  let valid = ["jpg", "svg", "jpeg", "png", "bmp", "gif"];

  let invalid = ["blah", "mp4", "pdf"];

  valid.forEach(value => {
    expect(mimetypes.passes(new MockFile(value), valid)).toBe(true);
  });

  invalid.forEach(value => {
    expect(mimetypes.passes(new MockFile(value), valid)).toBe(false);
  });
});
