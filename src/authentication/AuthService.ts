import { injectable, inject } from "inversify";
import ConfigInterface from "../config/ConfigInterface";
import HttpServiceInterface from "../http/HttpServiceInterface";
import JwtGuard from "./guards/JwtGuard";
import ApplicationInterface from "../foundation/ApplicationInterface";

@injectable()
export default class AuthService {
  private app: ApplicationInterface;
  private configService: ConfigInterface;
  private httpService: HttpServiceInterface;

  constructor(
    @inject("app") app,
    @inject("HttpService") httpService: HttpServiceInterface,
    @inject("ConfigService") configService: ConfigInterface
  ) {
    this.app = app;
    this.httpService = httpService;
    this.configService = configService;
  }

  // refresh

  public login(email, password) {
    this.getDriver().loginResponse("123");
    return this.httpService
      .post(this.getGuardConfig("endpoints.login"), {
        email,
        password
      })
      .then(response => {
        return this.getDriver().loginResponse(response);
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

  private getGuardConfig(config): any {
    return this.configService.get(
      `auth.guards.${this.configService.get("auth.defaults.guard")}.${config}`
    );
  }

  private getDriver(): JwtGuard {
    return this.app.make(this.getGuardConfig("driver"));
  }
}
