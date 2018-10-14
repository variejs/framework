import Vue from "vue";
import * as camelCase from "camelcase";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterFilterServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@app/filters", true, /^\.\/.*\.(ts|js)$/);
    files.keys().forEach(filename => {
      Vue.filter(this.getFilterName(filename), files(filename).default);
    });
  }

  private getFilterName(filename: string) {
    return camelCase(filename.replace(".ts", ""));
  }
}
