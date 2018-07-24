import Vue from "vue";
import * as camelCase from "camelcase";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterFiltersServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    try {
      let files = require.context("@app/filters", true, /^\.\/.*\.(ts|js)$/);
      files.keys().forEach(filename => {
        Vue.filter(this.getFilterName(filename), files(filename).default);
      });
    } catch (e) {
      console.warn(
        "You are trying to auto load filters, but do not have a filters folder, please create `app/filters` folder."
      );
    }
  }

  private getFilterName(filename: string) {
    return camelCase(filename.replace(".ts", ""));
  }
}
