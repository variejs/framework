import Vue from "vue";
import Notifications from "./index";
import NotificationsConfig from "./config";
import ServiceProvider from "../../support/ServiceProvider";

export default class NotificationsServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Notifications(), {
      store: $container.get("$store").getStore()
    });
  }

  public register() {
    this.mergeConfigFrom(NotificationsConfig, "notifications");
  }
}
