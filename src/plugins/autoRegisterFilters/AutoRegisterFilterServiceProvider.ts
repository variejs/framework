import Vue from "vue";
import camelize from "../../utilities/camelize";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterFilterServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@app/filters", true, /^\.\/.*\.(ts|js)$/);
    files.keys().forEach((filename) => {
      Vue.filter(this.getFilterName(filename), files(filename).default);
    });
  }

  protected getFilterName(filename: string) {
    return camelize(filename.replace(".ts", ""));
  }
}
