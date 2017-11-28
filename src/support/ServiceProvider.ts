import { injectable } from "inversify";
import ServiceProviderInterface from "./ServiceProviderInterface";

@injectable()
export default class ServiceProvider implements ServiceProviderInterface {
  _app = {};

  constructor(app) {
    this._app = app;
    app.providers.push(this);
  }

  protected mergeConfigFrom(config, key) {
    $config.set(key, Object.assign(config, $config.get(key)));
  }

  public boot() {}
}
