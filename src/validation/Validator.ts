import Form from "../plugins/forms/Form";

export default class Validator extends Form {
  public rules = {};
  public messages = {};

  constructor(data: object) {
    super(data, $app.make("$validator"));
  }
}
