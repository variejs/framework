import Vue from "vue";
import * as dashify from "dashify";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterComponentServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@components", true, /^\.\/.*\.(vue)$/);
    files.keys().forEach(filename => {
      Vue.component(this.getComponentName(filename), files(filename).default);
    });
  }

  private getComponentName(filename: string) {
    return dashify(filename.replace(".vue", ""));
  }
}
