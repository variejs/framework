import ServiceProvider from "../support/ServiceProvider";

declare const global: any;
import ConfigService from "./ConfigService";
import ConfigInterface from "./ConfigInterface";

export default class ConfigServiceProvider extends ServiceProvider {
  public register() {
    $container
      .bind<ConfigInterface>("$config")
      .to(ConfigService)
      .inSingletonScope();
    global.$config = $container.get("$config");
  }
}
