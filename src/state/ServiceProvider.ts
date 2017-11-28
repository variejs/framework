import VuexService from "./VuexService";
import ServiceProvider from "../support/ServiceProvider";
import StateServiceInterface from "./StateServiceInterface";

export default class StateServiceProvider extends ServiceProvider {
  public register() {
    $container
      .bind<StateServiceInterface>("$store")
      .to(VuexService)
      .inSingletonScope();
  }
}
