import RouterConfig from "./config";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/ServiceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public boot() {
    return this.app.make<VueRouterService>("$router").buildRouter();
  }

  public register() {
    this.mergeConfigFrom(RouterConfig, "router");
    this.app.singleton("$router", VueRouterService);
  }
}
