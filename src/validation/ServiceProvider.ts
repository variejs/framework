import AjvValidationService from "./AjvValidationService";
import ServiceProvider from "../support/ServiceProvider";
import ValidationServiceInterface from "./ValidationServiceInterface";

export default class RoutingServiceProvider extends ServiceProvider {
  public boot() {
    require("./directive/Validate");
  }

  public register() {
    this.app.singleton<ValidationServiceInterface>('$validator', AjvValidationService)
  }
}
