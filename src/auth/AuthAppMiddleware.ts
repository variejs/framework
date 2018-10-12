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
    let guard = config['guard'];

    if (this.authService.loggedIn(guard) || this.authService.hasStorage(guard)) {
        config.headers.common = Object.assign(config.headers.common, this.authService.getHeaders(guard));
    }

    return config;
  }

  public response(response: AxiosResponse) {
    return response;
  }

  public responseError(error: AxiosError) {
    if (error.response &&
      error.response.status === 401) {

      this.authService.callListener('unauthorized', error, this.authService.getGuardFromError(error))
    }

    return error;
  }
}
