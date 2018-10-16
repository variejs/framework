import { injectable, inject } from "inversify";
import HttpServiceInterface from "../http/HttpServiceInterface";

@injectable()
export default class AuthService {
  private httpService: HttpServiceInterface;

  constructor(@inject("HttpService") httpService) {
    this.httpService = httpService;
  }

  login(email, password) {
    return this.httpService.post("", {
      email,
      password
    });
  }

  register(name, email, password, confirmPassword) {
    return this.httpService.post("", {
      name,
      email,
      password,
      password_confirmation: confirmPassword
    });
  }

  forgotPasswordRequest(email) {
    return this.httpService.post("", {
      email
    });
  }

  resetPassword(token, email, password, confirmPassword) {
    return this.httpService.post("", {
      email,
      token,
      password,
      password_confirmation: confirmPassword
    });
  }
}
