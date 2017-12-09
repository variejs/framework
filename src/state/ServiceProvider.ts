import VuexService from "./VuexService";
import ServiceProvider from "../support/ServiceProvider";
import StateServiceInterface from "./StateServiceInterface";

export default class StateServiceProvider extends ServiceProvider {
  public register() {
    this.app.singleton<StateServiceInterface>("$store", VuexService);
  }
}
