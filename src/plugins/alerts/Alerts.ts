import AlertService from "./AlertService";
import { VueConstructor } from "vue/types/vue";
import AlertStore from "./alert-store/AlertStore";
import ConfigInterface from "../../config/ConfigInterface";

export default class Alerts {
  protected config: {
    duration: number;
  };

  constructor($config: ConfigInterface) {
    this.config = $config.get("alerts");
  }

  public install(Vue: VueConstructor, { store, service }) {
    store.registerModule(["varie", "alerts"], new AlertStore());
    Vue.mixin({
      computed: {
        alertService: (): AlertService => {
          return service;
        },
      },
    });
  }
}
