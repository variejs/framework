import Vue from "vue";
import dashify from "../../utilities/dashify";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterLayoutServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@views/layouts", false, /^\.\/.*\.(vue)$/);
    files.keys().forEach((filename) => {
      Vue.component(this.getComponentName(filename), files(filename).default);
    });
  }

  protected getComponentName(filename: string) {
    return `${dashify(filename.replace(/(\.vue|\/)/g, ""))}-layout`;
  }
}
