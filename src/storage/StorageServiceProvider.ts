import StorageService from "./StorageService";
import ServiceProvider from "../support/ServiceProvider";
import StorageServiceInterface from "./StorageServiceInterface";

export default class StorageServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton<StorageServiceInterface>(
      "StorageService",
      StorageService
    );
  }
}
