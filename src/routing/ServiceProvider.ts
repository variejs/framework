import RouterConfig from "./config";
import RouterInterface from "./RouterInterface";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/ServiceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public register() {
    this.mergeConfigFrom(RouterConfig, "router");

    this.app.singleton("$router", VueRouterService);

    return this.app.make("$router").buildRouter();
  }
}
