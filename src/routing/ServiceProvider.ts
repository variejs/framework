import RouterConfig from "./config";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/ServiceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public register() {
    this.mergeConfigFrom(RouterConfig, "router");

    this.app.singleton("$router", VueRouterService);

    // TODO - this should happen at boot?
    return this.app.make<VueRouterService>("$router").buildRouter();
  }
}
