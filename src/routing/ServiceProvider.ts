import RouterConfig from "./config";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/ServiceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public $router;

  public boot() {
    this.$router = this.app.make("RouterService");
    // @ts-ignore
    this.map();
    this.$router.buildRouter();
  }

  public register() {
    this.mergeConfigFrom(RouterConfig, "router");
    this.app.singleton<VueRouterService>("RouterService", VueRouterService);
  }
}
