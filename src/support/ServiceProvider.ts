import { injectable } from "inversify";
import ConfigInterface from "../config/ConfigInterface";
import ServiceProviderInterface from "./ServiceProviderInterface";
import ApplicationInterface from "./../foundation/ApplicationInterface";

@injectable()
export default class ServiceProvider implements ServiceProviderInterface {
  protected app: ApplicationInterface;

  constructor(app: ApplicationInterface) {
    this.app = app;
    app.providers.push(this);
  }

  protected mergeConfigFrom(frameworkConfig: any, key: string) {
    let appConfig = this.app.make<ConfigInterface>("$config").get(key);

    for (let appConfigKey in appConfig) {
      if (appConfig[appConfigKey]) {
        if (typeof appConfig[appConfigKey] === "object") {
          Object.assign(frameworkConfig[appConfigKey], appConfig[appConfigKey]);
        } else if (appConfig[appConfigKey]) {
          frameworkConfig[appConfigKey] = appConfig[appConfigKey];
        }
      }
    }
    $config.set(key, frameworkConfig);
  }

  public boot() {}
}
