import JwtGuard from "./guards/jwt/JwtGuard";
import { injectable, inject } from "inversify";
import ConfigInterface from "../config/ConfigInterface";
import AuthServiceInterface from "./AuthServiceInterface";
import HttpServiceInterface from "../http/HttpServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";

@injectable()
export default class AuthService implements AuthServiceInterface {
  private app: ApplicationInterface;
  private configService: ConfigInterface;
  private httpService: HttpServiceInterface;

  constructor(
    @inject("app") app,
    @inject("ConfigService") configService: ConfigInterface,
    @inject("HttpService") httpService: HttpServiceInterface
  ) {
    this.app = app;
    this.httpService = httpService;
    this.configService = configService;
  }

  public login(email, password) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.login"), {
        email,
        password
      })
      .then(response => {
        return this.getDriver().loginResponse(response);
      });
  }

  public refresh() {
    return this.httpService
      .post(this.getGuardConfig("endpoints.refresh"))
      .then(response => {
        return this.getDriver().refreshResponse(response);
      });
  }

  public logout() {
    return this.httpService
      .post(this.getGuardConfig("endpoints.logout"))
      .then(response => {
        return this.getDriver().logoutResponse(response);
      });
  }

  public register(name, email, password, confirmPassword) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.register"), {
        name,
        email,
        password,
        password_confirmation: confirmPassword
      })
      .then(response => {
        return this.getDriver().registerResponse(response);
      });
  }

  public forgotPasswordRequest(email) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.forgotPassword"), {
        email
      })
      .then(response => {
        return this.getDriver().forgotPasswordRequestResponse(response);
      });
  }

  public resetPassword(token, email, password, confirmPassword) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.resetPassword"), {
        email,
        token,
        password,
        password_confirmation: confirmPassword
      })
      .then(response => {
        return this.getDriver().resetPasswordResponse(response);
      });
  }

  public getUser() {
    return this.httpService.get(this.getGuardConfig("endpoints.user"));
  }

  public isLoggedIn() {
    return this.getDriver().isLoggedIn();
  }

  public getGuardConfig(config): any {
    return this.configService.get(
      `auth.guards.${this.configService.get("auth.defaults.guard")}.${config}`
    );
  }

  private getDriver(): JwtGuard {
    return this.app.make(this.getGuardConfig("driver"));
  }
}
