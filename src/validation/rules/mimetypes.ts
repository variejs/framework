export default {
  passes(files: File | Array<File>, parameters: Array<any>) {
    if (files) {
      if (!Array.isArray(files)) {
        files = [files];
      }
      let validLength = 0;

      const regex = new RegExp(
        `${parameters.join("|").replace("*", ".+")}$`,
        "i",
      );

      files.forEach((file) => {
        if (regex.test(file.type)) {
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
