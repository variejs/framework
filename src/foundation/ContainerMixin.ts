import Vue from "vue";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  registerMixin(app: ApplicationInterface) {
    Vue.mixin({
      beforeCreate() {
        // @ts-ignore - TODO : can we modify the VueComponent options to let us do this?
        let services = this.$options.$inject || [];
        services.forEach((service: string) => {
          this[service] = app.make(service);
        });
      }
    });
  }
}
