import Vue from "vue";
import Notifications from "./index";
import NotificationsConfig from "./config";
import ServiceProvider from "../../support/ServiceProvider";
import NotificationService from "./NotificationService";
import NotificationServiceInterface from "./NotificationServiceInterface";

export default class NotificationsServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Notifications(), {
      store: this.app.make("$store").getStore(),
      service: this.app.make("$notifications")
    });
  }

  public register() {
    this.mergeConfigFrom(NotificationsConfig, "notifications");
    this.app.singleton<NotificationServiceInterface>(
      "$notifications",
      NotificationService
    );
  }
}
