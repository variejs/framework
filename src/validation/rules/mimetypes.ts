import { isArray } from 'util'

export default {
  passes(files: any, parameters: any) {

    if(files) {

      if(!isArray(files)) {
        files = [files];
      }
      let validLength = 0;

      const regex = new RegExp(`${parameters.join('|').replace('*', '.+')}$`, 'i');

      files.forEach(file => {
        if(regex.test(file.type)) {
          validLength++;
        }
      });

      return validLength === files.length;
    }

    return true;
  },

  replacers() {
    return ["values"];
  }
};
