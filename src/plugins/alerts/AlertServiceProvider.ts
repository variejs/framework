import Vue from "vue";
import Alerts from "./Alerts";
import config from "./config";
import AlertService from "./AlertService";
import VuexService from "../../state/VuexService";
import AlertServiceInterface from "./AlertServiceInterface";
import ServiceProvider from "../../support/ServiceProvider";

export default class AlertServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Alerts(this.app.make("ConfigService")), {
      store: this.app.make<VuexService>("StateService").getStore(),
      service: this.app.make("AlertService")
    });
  }

  public register() {
    this.mergeConfigFrom(config, "alerts");
    this.app.singleton<AlertServiceInterface>("AlertService", AlertService);
  }
}
