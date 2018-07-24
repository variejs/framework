import Vue from "vue";
import * as dashify from "dashify";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterLayoutsServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    try {
      let files = require.context("@views/layouts", false, /^\.\/.*\.(vue)$/);
      files.keys().forEach(filename => {
        Vue.component(this.getComponentName(filename), files(filename).default);
      });
    } catch (e) {
      console.warn(
        "You are trying to auto load layouts, but do not have a views/layouts folder, please create `views/layouts` folder."
      );
    }
  }

  private getComponentName(filename: string) {
    return `${dashify(filename.replace(".vue", ""))}-layout`;
  }
}
