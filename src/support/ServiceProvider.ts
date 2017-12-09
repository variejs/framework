import { injectable } from "inversify";
import ServiceProviderInterface from "./ServiceProviderInterface";
import ApplicationInterface from "./../foundation/ApplicationInterface";

@injectable()
export default class ServiceProvider implements ServiceProviderInterface {
  protected app: ApplicationInterface;

  constructor(app: ApplicationInterface) {
    this.app = app;
    app.providers.push(this);
  }

  protected mergeConfigFrom(config: {}, key: string) {
    $config.set(key, Object.assign(config, $config.get(key)));
  }

  public boot() {}
}
