import HttpConfig from "./config";
import ServiceProvider from "../support/ServiceProvider";

export default class AuthenticationServiceProvider extends ServiceProvider {
  public boot() {
    // let $httpService = this.app.make<AxiosHttpService>("HttpService");
    // require("@app/middleware").default.forEach(middleware => {
    //   $httpService.registerMiddleware(middleware);
    // });
  }

  public register() {
    this.mergeConfigFrom(HttpConfig, "http");
    // this.app.singleton<HttpServiceInterface>("HttpService", AxiosHttpService);
  }
}
