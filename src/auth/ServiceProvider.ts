import ServiceProvider from "../support/ServiceProvider";
import AuthServiceInterface from "./AuthServiceInterface";
import AuthService from "./AuthService";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import {inject, injectable} from "inversify";

@injectable()
export default class AuthServiceProvider extends ServiceProvider {
  public boot() {
    this.app.make<AuthService>("AuthService");
  }
  public register() {
    this.app.singleton<AuthServiceInterface>("AuthService", AuthService);
  }
}
