import HttpConfig from "./config";
import AxiosHttpService from "./AxiosHttpService";
import ServiceProvider from "../support/ServiceProvider";
import HttpServiceInterface from "./HttpServiceInterface";

export default class HttpServiceProvider extends ServiceProvider {
  public boot() {
    let $httpService = this.app.make<AxiosHttpService>("$http");
    require("@app/middleware").default.forEach(middleware => {
      $httpService.registerMiddleware(middleware);
    });
  }

  public register() {
    this.mergeConfigFrom(HttpConfig, "http");
    this.app.singleton<HttpServiceInterface>("$http", AxiosHttpService);
  }
}
