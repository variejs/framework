export default class Model {

  constructor(data) {
    for (const field in data) {
      this[field] = data[field];
    }
  }

}
