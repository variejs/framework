import NotificationStores from "./store";
import { VueConstructor } from "vue/types/vue";
import NotificationService from "./NotificationService";

class Notifications {
  protected __config: {
    duration: number;
    component: any;
  };

  private _service: NotificationService;

  public install(Vue: VueConstructor, { store }) {
    this.__config = $config.get("notifications");

    for (let name in NotificationStores) {
      let module = NotificationStores[name];
      store.registerModule(["varie", name], module);
    }

    this._service = new NotificationService(this.__config, store);

    Vue.component("notifications", this.__config.component);

    Vue.mixin({
      computed: {
        notificationService: (): NotificationService => {
          return this._service;
        }
      }
    });
  }
}

export default Notifications;
