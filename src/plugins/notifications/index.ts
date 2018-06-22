import { VueConstructor } from "vue/types/vue";
import NotificationStore from "./store/notifications";
import NotificationService from "./NotificationService";

class Notifications {
  protected __config: {
    duration: number;
    component: any;
  };

  public install(Vue: VueConstructor, { store, service }) {
    this.__config = $config.get("notifications");

    store.registerModule(["varie", "notifications"], new NotificationStore());

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
