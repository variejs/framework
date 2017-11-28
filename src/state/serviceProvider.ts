import VuexService from "./VuexService";
import ServiceProvider from "../support/serviceProvider";
import StateServiceInterface from "./stateServiceInterface";

export default class StateServiceProvider extends ServiceProvider {
  public register() {
    $container
      .bind<StateServiceInterface>("$store")
      .to(VuexService)
      .inSingletonScope();
  }
}
