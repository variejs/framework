import { injectable, inject } from "inversify";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import AxiosHttpMiddlewareInterface from "../http/AxiosHttpMiddlewareInterface";
import AuthServiceInterface from "./AuthServiceInterface";

@injectable()
export default class AuthAppMiddleware implements AxiosHttpMiddlewareInterface {
  protected authService;

  constructor(@inject("AuthService") authService: AuthServiceInterface) {
    this.authService = authService;
  }
  public request(config: AxiosRequestConfig) {

    if (this.authService.loggedIn()) {
        config.headers.common = Object.assign(config.headers.common, this.authService.getHeaders());
    }

    return config;
  }

  public response(response: AxiosResponse) {
    return response;
  }

  public responseError(error: AxiosError) {
    return Promise.reject(error);
  }
}