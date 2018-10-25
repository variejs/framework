import { inject, injectable } from "inversify";
import StateServiceInterface from "../../state/StateServiceInterface";
import StorageServiceInterface from "../../storage/StorageServiceInterface";

@injectable()
export default class JwtGuard {
  private $store;
  private storageService;

  constructor(
    @inject("StateService") stateService: StateServiceInterface,
    @inject("StorageService") storageService: StorageServiceInterface
  ) {
    this.$store = stateService.getStore();
    this.storageService = storageService;
  }

  loginResponse(response) {
    // TODO
  }

  logoutResponse(response) {
    // TODO
  }

  registerResponse(response) {
    // TODO
  }
  forgotPasswordRequestResponse(response) {
    // TODO
  }
  resetPasswordResponse(response) {
    // TODO
  }
}
