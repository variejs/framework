import Form from "../plugins/forms/Form";
import { inject, injectable } from 'inversify'
import ValidationServiceInterface from './ValidationServiceInterface'

@injectable()
export default class Validator extends Form {

  public rules = {};
  public messages = {};

  // TODO - should re-think how this validator is used , not a fan of how I thought of it the first time
  constructor(@inject('$validator') $validator : ValidationServiceInterface) {
    super({}, $validator);
  }
}
