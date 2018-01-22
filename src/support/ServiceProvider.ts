import { injectable } from "inversify";
import ServiceProviderInterface from "./ServiceProviderInterface";
import ApplicationInterface from "./../foundation/ApplicationInterface";
import { isObject } from "util";

@injectable()
export default class ServiceProvider implements ServiceProviderInterface {
  protected app: ApplicationInterface;

  constructor(app: ApplicationInterface) {
    this.app = app;
    app.providers.push(this);
  }

  protected mergeConfigFrom(frameworkConfig: {}, key: string) {
    let appConfig = $config.get(key);

    for (let appConfigKey in appConfig) {
      if (appConfig[appConfigKey]) {
        if (isObject(appConfig[appConfigKey])) {
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
