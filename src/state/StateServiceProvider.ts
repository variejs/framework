import VuexService from "./VuexService";
import ServiceProvider from "../support/ServiceProvider";
import StateServiceInterface from "./StateServiceInterface";

export default class StateServiceProvider extends ServiceProvider {
  public $store;

  public boot() {
    this.$store = this.app.make("StateService");
    // @ts-ignore
    this.map();
  }

  public register() {
    this.app.singleton<StateServiceInterface>("StateService", VuexService);
  }
}
