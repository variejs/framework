import auth from "../publish/config/auth";
import { inject, injectable } from "inversify";
import StateServiceInterface from "../../state/StateServiceInterface";
import StorageServiceInterface from "../../storage/StorageServiceInterface";
import ConfigInterface from "../../config/ConfigInterface";
import HttpServiceInterface from "../../http/HttpServiceInterface";
import AxiosHttpMiddlewareInterface from "../../http/AxiosHttpMiddlewareInterface";

@injectable()
export default class JwtGuard {
  private $store;
  private authService;
  private httpService;
  private configService;
  private storageService;

  protected tokenName = "auth.token";

  constructor(
    @inject("AuthService") authService,
    @inject("StateService") stateService: StateServiceInterface,
    @inject("ConfigService") configService: ConfigInterface,
    @inject("HttpService") httpService: HttpServiceInterface,
    @inject("StorageService") storageService: StorageServiceInterface
  ) {
    this.httpService = httpService;
    this.authService = authService;
    this.configService = configService;
    this.storageService = storageService;
    this.$store = stateService.getStore();
    this.httpService.registerMiddleware(SetAuthToken);
  }

  loginResponse(response) {
    this.setAuthToken(response);
    this.$store.dispatch("auth/getUser");
  }

  logoutResponse(response) {
    // TODO
  }

  refreshResponse(response) {
    this.setAuthToken(response);
  }

  registerResponse(response) {
    if (this.authService.getGuardConfig("loginAfterRegister")) {
      this.setAuthToken(response);
      this.$store.dispatch("auth/getUser");
    }
  }

  forgotPasswordRequestResponse(response) {
    // TODO
  }

  resetPasswordResponse(response) {
    if (this.authService.getGuardConfig("loginAfterReset")) {
      this.setAuthToken(response);
      this.$store.dispatch("auth/getUser");
    }
  }

  async isLoggedIn() {
    if (this.$store.state.auth.user) {
      return true;
    }

    if (this.storageService.get(this.tokenName)) {
      await this.$store.dispatch("auth/getUser");
      return this.$store.state.auth.user;
    }

    return false;
  }

  private setAuthToken(response) {
    this.storageService.set(
      this.tokenName,
      JSON.stringify({
        access_token:
          response.data[this.authService.getGuardConfig("token.accessToken")],
        token_type:
          response.data[this.authService.getGuardConfig("token.tokenTypeName")],
        expires_at:
          new Date().getTime() +
          1000 *
            response.data[this.authService.getGuardConfig("token.expiresIn")]
      })
    );
  }
}

// TODO - this needs to be moved out and registered somewhere else, most likely the JWT service provider ?
@injectable()
class SetAuthToken implements AxiosHttpMiddlewareInterface {
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
