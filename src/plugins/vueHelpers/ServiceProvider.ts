import VueHelperService from "./VueHelperService";
import ServiceProvider from "../../support/ServiceProvider";

export default class CommonServiceProvider extends ServiceProvider {
  public register() {
    $container
      .bind("$vueHelpers")
      .to(VueHelperService)
      .inSingletonScope();
  }

  public boot() {
    $container.get("$vueHelpers").register();
  }
}
