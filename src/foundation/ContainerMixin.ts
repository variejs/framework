import Vue from "vue";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  public app: ApplicationInterface;

  registerMixin(app: ApplicationInterface) {
    Vue.mixin({
      beforeMount() {
        this.$injector(this.inject || []);
      },
      methods: {
        $injector(services: Array<string>) {
          services.forEach((service: string) => {
            this[service] = app.make(service);
          });
        }
      }
    });
  }
}
