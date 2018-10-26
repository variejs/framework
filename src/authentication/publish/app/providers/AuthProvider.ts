import JwtGuard from "varie/lib/authentication/guards/JwtGuard";
import ServiceProvider from "varie/lib/support/ServiceProvider";

export default class AuthProvider extends ServiceProvider {
  public register() {
    this.app.singleton("JwtGuard", JwtGuard);
  }
}
