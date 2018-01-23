import HttpConfig from "./config";
import AxiosHttpService from "./AxiosHttpService";
import ServiceProvider from "../support/ServiceProvider";
import HttpServiceInterface from "./HttpServiceInterface";

export default class RoutingServiceProvider extends ServiceProvider {
  public boot() {
  }

  public register() {
    this.mergeConfigFrom(HttpConfig, "http");
    this.app.singleton<HttpServiceInterface>("$http", AxiosHttpService);
  }
}
