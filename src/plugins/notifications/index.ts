import NotificationStores from "./store";
import { VueConstructor } from "vue/types/vue";
import NotificationService from "./NotificationService";

class Notifications {
  protected __config: {
    duration: number;
    component: any;
  };

  public install(Vue: VueConstructor, { store, service }) {
    this.__config = $config.get("notifications");

    for (let name in NotificationStores) {
      let module = NotificationStores[name];
      store.registerModule(["varie", name], module);
    }

    Vue.component("notifications", this.__config.component);

    Vue.mixin({
      computed: {
        notificationService: (): NotificationService => {
          return service;
        }
      }
    });
  }
}

export default Notifications;
