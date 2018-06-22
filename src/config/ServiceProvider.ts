import ServiceProvider from "../support/ServiceProvider";

declare const global: any;
import ConfigService from "./ConfigService";
import ConfigInterface from "./ConfigInterface";

export default class ConfigServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton<ConfigInterface>("$config", ConfigService);
    global.$config = this.app.make("$config");
  }
}
