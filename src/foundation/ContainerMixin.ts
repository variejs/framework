import Vue from "vue";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  public app: ApplicationInterface;

  registerMixin(app: ApplicationInterface) {
    Vue.mixin({
      beforeCreate() {
        let services = this.$options.$inject || [];
        services.forEach((service: string) => {
          this[service] = app.make(service);
        });
      }
    });
  }
}
