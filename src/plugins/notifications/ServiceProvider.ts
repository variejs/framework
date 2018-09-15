import Vue from "vue";
import Notifications from "./index";
import NotificationsConfig from "./config";
import VuexService from "../../state/VuexService";
import NotificationService from "./NotificationService";
import ServiceProvider from "../../support/ServiceProvider";
import NotificationServiceInterface from "./NotificationServiceInterface";

export default class NotificationsServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Notifications(this.app.make("ConfigService")), {
      store: this.app.make<VuexService>("StoreService").getStore(),
      service: this.app.make("NotificationService")
    });
  }

  public register() {
    this.mergeConfigFrom(NotificationsConfig, "notifications");
    this.app.singleton<NotificationServiceInterface>(
      "NotificationService",
      NotificationService
    );
  }
}
