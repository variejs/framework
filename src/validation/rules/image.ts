export default {
  passes(files: File | Array<File>) {
    if (files) {
      if (!Array.isArray(files)) {
        files = [files];
      }
      let validLength = 0;

      let fileTypeRegex = new RegExp(/(jpg|svg|jpeg|png|bmp|gif)$/i);
      let fileNameRegex = new RegExp(/\.(jpg|svg|jpeg|png|bmp|gif)$/i);

      files.forEach((file) => {
        if (fileNameRegex.test(file.name) || fileTypeRegex.test(file.type)) {
          validLength++;
        }
      });

      return validLength === files.length;
    }

    return true;
  },

  replacers() {
    return ["values"];
  },
};
