import { inject, injectable } from "inversify";
import StorageServiceInterface from "./../../../storage/StorageServiceInterface";
import AxiosHttpMiddlewareInterface from "./../../../http/AxiosHttpMiddlewareInterface";

@injectable()
export default class JwtGuardMiddleware
  implements AxiosHttpMiddlewareInterface {
  private authService;
  private storageService;

  constructor(
    @inject("AuthService") authService,
    @inject("StorageService") storageService: StorageServiceInterface
  ) {
    this.authService = authService;
    this.storageService = storageService;
  }

  // @ts-ignore
  public request(config) {
    return new Promise(resolve => {
      let token = JSON.parse(this.storageService.get("auth.token"));
      if (token) {
        if (
          !config.url.includes(
            this.authService.getGuardConfig("endpoints.refresh")
          ) &&
          token.expires_at < new Date().getTime()
        ) {
          this.authService.refresh().then(() => {
            token = JSON.parse(this.storageService.get("auth.token"));
            config.headers.common.Authorization = `${token.token_type} ${
              token.access_token
            }`;
            resolve(config);
          });
        } else {
          config.headers.common.Authorization = `${token.token_type} ${
            token.access_token
          }`;
          resolve(config);
        }
      } else {
        resolve(config);
      }
    });
  }

  public response(response) {
    return response;
  }

  public responseError(error) {
    return error;
  }
}
