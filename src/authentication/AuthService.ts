import { injectable, inject } from "inversify";
import ConfigInterface from '../config/ConfigInterface'
import HttpServiceInterface from "../http/HttpServiceInterface";

@injectable()
export default class AuthService {

  private httpService: HttpServiceInterface;
  private configService : ConfigInterface

  constructor(
    @inject("HttpService") httpService : HttpServiceInterface,
    @inject("ConfigService") configService : ConfigInterface) {
    this.httpService = httpService;
    this.configService = configService;
  }

  // logout
  // refresh

  private getGuardConfig(config) {
    return this.configService.get(`auth.guards.${this.configService.get('auth.defaults.guard')}.${config}`);
  }

  login(email, password) {
    return this.httpService.post(this.getGuardConfig('endpoints.login'), {
      email,
      password
    });
  }

  register(name, email, password, confirmPassword) {
    return this.httpService.post(this.getGuardConfig('endpoints.register'), {
      name,
      email,
      password,
      password_confirmation: confirmPassword
    });
  }

  forgotPasswordRequest(email) {
    return this.httpService.post(this.getGuardConfig('endpoints.forgotPassword'), {
      email
    });
  }

  resetPassword(token, email, password, confirmPassword) {
    return this.httpService.post(this.getGuardConfig('endpoints.resetPassword'), {
      email,
      token,
      password,
      password_confirmation: confirmPassword
    });
  }

  handleAuthResponse(response) {
    console.info(response);
  }

  getUser() {
    return this.httpService.get(this.getGuardConfig('endpoints.user'));
  }
}
