import auth from "./../../publish/config/auth";
import { inject, injectable } from "inversify";
import ConfigInterface from "./../../../config/ConfigInterface";
import HttpServiceInterface from "./../../../http/HttpServiceInterface";
import StateServiceInterface from "./../../../state/StateServiceInterface";
import StorageServiceInterface from "./../../../storage/StorageServiceInterface";

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
    @inject("ConfigService") configService: ConfigInterface,
    @inject("HttpService") httpService: HttpServiceInterface,
    @inject("StateService") stateService: StateServiceInterface,
    @inject("StorageService") storageService: StorageServiceInterface
  ) {
    this.httpService = httpService;
    this.authService = authService;
    this.configService = configService;
    this.storageService = storageService;
    this.$store = stateService.getStore();
  }

  public async loginResponse(response) {
    this.setAuthToken(response);
    return await this.$store.dispatch("auth/getUser");
  }

  public async logoutResponse(response) {
    // TODO
  }

  public async refreshResponse(response) {
    this.setAuthToken(response);
  }

  public async registerResponse(response) {
    if (this.authService.getGuardConfig("loginAfterRegister")) {
      this.setAuthToken(response);
      return await this.$store.dispatch("auth/getUser");
    }
  }

  public async forgotPasswordRequestResponse(response) {
    // TODO
  }

  public async resetPasswordResponse(response) {
    if (this.authService.getGuardConfig("loginAfterReset")) {
      this.setAuthToken(response);
      return await this.$store.dispatch("auth/getUser");
    }
  }

  public async isLoggedIn() {
    if (this.$store.state.auth.user) {
      return true;
    }

    if (this.storageService.get(this.tokenName)) {
      return await this.$store.dispatch("auth/getUser").then(
        () => {
          return true;
        },
        () => {
          return false;
        }
      );
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
