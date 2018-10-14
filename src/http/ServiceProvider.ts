import HttpConfig from "./config";
import AxiosHttpService from "./AxiosHttpService";
import ServiceProvider from "../support/ServiceProvider";
import HttpServiceInterface from "./HttpServiceInterface";
import AppMiddleware from "../middleware";

export default class HttpServiceProvider extends ServiceProvider {
  public boot() {
    let $httpService = this.app.make<AxiosHttpService>("HttpService");
    require("@app/middleware").default.concat(AppMiddleware).forEach(middleware => {
      $httpService.registerMiddleware(middleware);
    });
  }

  public register() {
    this.mergeConfigFrom(HttpConfig, "http");
    this.app.singleton<HttpServiceInterface>("HttpService", AxiosHttpService);
  }
}
