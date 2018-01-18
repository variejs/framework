import ServiceProvider from "../support/ServiceProvider";
import VarieValidationService from "./VarieValidationService";
import ValidationServiceInterface from "./ValidationServiceInterface";

export default class RoutingServiceProvider extends ServiceProvider {
  public boot() {
    require("./directive/Validate");
  }

  public register() {
    this.app.singleton<ValidationServiceInterface>(
      "$validator",
      VarieValidationService
    );
  }
}
