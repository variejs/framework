export default class Model {
  constructor(data: object) {
    for (const field in data) {
      this[field] = data[field];
    }
  }
}
