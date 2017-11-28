import RouterConfig from "./config";
import RouterInterface from "./RouterInterface";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/serviceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public register() {
    this.mergeConfigFrom(RouterConfig, "router");

    $container
      .bind<RouterInterface>("$router")
      .to(VueRouterService)
      .inSingletonScope();

    return $container.get<RouterInterface>("$router").buildRouter();
  }
}
