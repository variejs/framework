import RouterConfig from "./config";
import VueRouterService from "./VueRouterService";
import ServiceProvider from "../support/ServiceProvider";

export default class RoutingServiceProvider extends ServiceProvider {
  public $router;

  public boot() {
    this.$router = this.app.make("RouterService");

    // @ts-ignore
    if (typeof this.map === "function") {
      // @ts-ignore
      this.map();
    } else {
      throw "Your routing service provider must have a map function.";
    }

    this.$router.buildRouter();
  }

  public register() {
    this.mergeConfigFrom(RouterConfig, "router");
    this.app.singleton<VueRouterService>("RouterService", VueRouterService);
  }
}
