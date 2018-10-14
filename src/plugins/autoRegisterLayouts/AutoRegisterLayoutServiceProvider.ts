import Vue from "vue";
import * as dashify from "dashify";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterLayoutServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@views/layouts", false, /^\.\/.*\.(vue)$/);
    files.keys().forEach(filename => {
      Vue.component(this.getComponentName(filename), files(filename).default);
    });
  }

  private getComponentName(filename: string) {
    return `${dashify(filename.replace(".vue", ""))}-layout`;
  }
}
