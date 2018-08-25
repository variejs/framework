import ValidationConfig from "./config";
import ServiceProvider from "../support/ServiceProvider";
import VarieValidationService from "./VarieValidationService";
import ValidationServiceInterface from "./ValidationServiceInterface";

export default class RoutingServiceProvider extends ServiceProvider {
  public boot() {
    require("./directive/Validate");
  }

  public register() {
    this.mergeConfigFrom(ValidationConfig, "validation");

    let files = require.context("@resources/lang", true, /validation\.(ts)$/);

    for (let filename of files.keys()) {
      $config.set(
        `validation.${filename
          .replace("./", "")
          .split("/")
          .shift()}`,
        files(filename).default
      );
    }

    this.app.singleton<ValidationServiceInterface>(
      "validationService",
      VarieValidationService
    );
  }
}
