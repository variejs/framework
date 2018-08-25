import Vue from "vue";
import Notifications from "./index";
import NotificationsConfig from "./config";
import VuexService from "../../state/VuexService";
import NotificationService from "./NotificationService";
import ServiceProvider from "../../support/ServiceProvider";
import NotificationServiceInterface from "./NotificationServiceInterface";

export default class NotificationsServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Notifications(), {
      store: this.app.make<VuexService>("storeService").getStore(),
      service: this.app.make("notificationService")
    });
  }

  public register() {
    this.mergeConfigFrom(NotificationsConfig, "notifications");
    this.app.singleton<NotificationServiceInterface>(
      "notificationService",
      NotificationService
    );
  }
}
