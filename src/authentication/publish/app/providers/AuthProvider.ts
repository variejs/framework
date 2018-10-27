import ServiceProvider from "varie/lib/support/ServiceProvider";
import JwtGuard from "varie/lib/authentication/guards/jwt/JwtGuard";

export default class AuthenticationServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton("JwtGuard", JwtGuard);
  }
}
