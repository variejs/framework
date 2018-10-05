import Vue from "vue";
import * as camelCase from "camelcase";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  registerMixin(app: ApplicationInterface) {
    Vue.mixin({
      beforeCreate() {
        // @ts-ignore
        let services = this.$options.$inject || [];
        services.forEach((service: string) => {
          this[camelCase(service)] = app.make(service);
        });
      }
    });
  }
}
