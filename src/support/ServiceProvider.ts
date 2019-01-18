import { injectable } from "inversify";
import ConfigInterface from "../config/ConfigInterface";
import ServiceProviderInterface from "./ServiceProviderInterface";
import ApplicationInterface from "./../foundation/ApplicationInterface";

@injectable()
export default class ServiceProvider implements ServiceProviderInterface {
  public app: ApplicationInterface;

  constructor(app: ApplicationInterface) {
    this.app = app;
    this.app.addProvider(this);
  }

  protected mergeConfigFrom(frameworkConfig: any, key: string) {
    let appConfig = this.app.make<ConfigInterface>("ConfigService").get(key);

    for (let appConfigKey in appConfig) {
      if (appConfig[appConfigKey] !== undefined) {
        if (
          frameworkConfig[appConfigKey] instanceof Object &&
          appConfig[appConfigKey] instanceof Object
        ) {
          Object.assign(frameworkConfig[appConfigKey], appConfig[appConfigKey]);
        } else {
          frameworkConfig[appConfigKey] = appConfig[appConfigKey];
        }
      }
    }
    $config.set(key, frameworkConfig);
  }


  public boot() {}
}
