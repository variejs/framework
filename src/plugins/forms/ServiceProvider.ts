import Vue from "vue";
import Forms from "./index";
import ServiceProvider from "../../support/ServiceProvider";

export default class NotificationsServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(new Forms());
  }
  public register() {}
}
