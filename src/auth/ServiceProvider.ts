import ServiceProvider from "../support/ServiceProvider";
import AuthServiceInterface from "./AuthServiceInterface";
import AuthService from "./AuthService";

export default class AuthServiceProvider extends ServiceProvider {
  public boot() {
    this.app.make<AuthService>("$auth");
  }
  public register() {
    this.app.singleton<AuthServiceInterface>("$auth", AuthService);
  }
}
