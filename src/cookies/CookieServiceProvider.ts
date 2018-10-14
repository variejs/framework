import CookieService from "./CookieService";
import CookieInterface from "./CookieInterface";
import ServiceProvider from "../support/ServiceProvider";

export default class ConfigServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton<CookieInterface>("CookieService", CookieService);
  }
}
