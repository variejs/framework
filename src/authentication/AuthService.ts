import { injectable, inject } from "inversify";
import ConfigInterface from "../config/ConfigInterface";
import HttpServiceInterface from "../http/HttpServiceInterface";
import JwtGuard from "./guards/JwtGuard";

@injectable()
export default class AuthService {
  private httpService: HttpServiceInterface;
  private configService: ConfigInterface;

  constructor(
    @inject("HttpService") httpService: HttpServiceInterface,
    @inject("ConfigService") configService: ConfigInterface
  ) {
    this.httpService = httpService;
    this.configService = configService;
  }

  // refresh

  private getGuardConfig(config): any {
    return this.configService.get(
      `auth.guards.${this.configService.get("auth.defaults.guard")}.${config}`
    );
  }

  private getDriver(): JwtGuard {
    let Driver = this.getGuardConfig("driver");
    return new Driver();
  }

  login(email, password) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.login"), {
        email,
        password
      })
      .then(response => {
        return this.getDriver().loginResponse(response);
      });
  }

  logout() {
    return this.httpService
      .post(this.getGuardConfig("endpoints.logout"))
      .then(response => {
        return this.getDriver().logoutResponse(response);
      });
  }

  register(name, email, password, confirmPassword) {
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

  forgotPasswordRequest(email) {
    return this.httpService
      .post(this.getGuardConfig("endpoints.forgotPassword"), {
        email
      })
      .then(response => {
        return this.getDriver().forgotPasswordRequestResponse(response);
      });
  }

  resetPassword(token, email, password, confirmPassword) {
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

  getUser() {
    return this.httpService.get(this.getGuardConfig("endpoints.user"));
  }
}
