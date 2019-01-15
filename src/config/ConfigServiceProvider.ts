declare const global: any;
import ConfigService from "./ConfigService";
import ConfigInterface from "./ConfigInterface";
import ServiceProvider from "../support/ServiceProvider";

export default class ConfigServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton<ConfigInterface>("ConfigService", ConfigService);
    global.$config = this.app.make("ConfigService");
  }
}
