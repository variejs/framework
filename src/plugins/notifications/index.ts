import { VueConstructor } from "vue/types/vue";
import NotificationStore from "./store/notifications";
import NotificationService from "./NotificationService";
import ConfigInterface from "../../config/ConfigInterface";

export default class Notifications {
  protected __config: {
    duration: number;
  };

  constructor($config: ConfigInterface) {
    this.__config = $config.get("notifications");
  }

  public install(Vue: VueConstructor, { store, service }) {
    store.registerModule(["varie", "notifications"], new NotificationStore());

    Vue.mixin({
      computed: {
        notificationService: (): NotificationService => {
          return service;
        }
      }
    });
  }
}
