import Vue from "vue";
import camelize from "../utilities/camelize";
import ApplicationInterface from "./ApplicationInterface";

export default class ContainerMixin {
  protected $app;

  registerMixin(app: ApplicationInterface) {
    let container = this;
    this.$app = app;

    Vue.mixin({
      beforeCreate() {
        container.setServices(this);
        container.setMeta(this);
      },
      beforeDestroy() {
        this.destoryMeta(this);
      }
    });
  }

  setServices(vm) {
    let services = vm.$options.$inject || [];

    services.forEach((service: string) => {
      vm[camelize(service)] = this.$app.make(service);
    });
  }

  setMeta(vm) {
    let titleElement = document.querySelector('head title');

    if (!titleElement) {
      return false;
    }

    let title = vm.$options.title;
    let meta = vm.$options.meta;
    if (title) {
      document.title = title;
    }

    if (meta && Array.isArray(meta)) {
      for (let tag of meta) {
        let metaTag = document.createElement('meta');

        for (let key in tag) {
          metaTag.setAttribute(key, tag[key])
        }

        if (!vm.metaCreated) {
          vm.metaCreated = [];
        }

        vm.metaCreated.push(metaTag);
        // @ts-ignore
        titleElement.after(metaTag)
      }
    }
  }
  
  destoryMeta(vm) {
    // @ts-ignore
    if (vm.metaCreated && Array.isArray(vm.metaCreated)) {
      // @ts-ignore
      vm.metaCreated.forEach(meta => {
        if (meta instanceof HTMLElement) {
          meta.remove();
        }
      })
    }
  }
}
