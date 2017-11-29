import Vue from "vue";
import kebabCase from "kebab-case";
import ServiceProvider from "../../support/ServiceProvider";

export default class CommonServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    try {
      let files = require.context("@components", true, /^\.\/.*\.(vue)$/);
      files.keys().forEach(filename => {
        Vue.component(this.getComponentName(filename), files(filename));
      });
    } catch (e) {
      console.warn(
        "You are trying to auto load components, but do not have a component folder, please create `app/components` folder."
      );
    }
  }

  private getComponentName(filename: string) {
    return kebabCase(filename.replace(".vue", ""));
  }
}
