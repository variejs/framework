import Vue from "vue";
import camelize from "../utilities/camelize";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  registerMixin(app: ApplicationInterface) {
    Vue.mixin({
      beforeCreate() {
        let services = this.$options.$inject || [];
        services.forEach((service: string) => {
          this[camelize(service)] = app.make(service);
        });
      },
    });
  }
}
