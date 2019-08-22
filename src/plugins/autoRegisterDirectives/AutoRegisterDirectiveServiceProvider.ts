import Vue from "vue";
import ServiceProvider from "../../support/ServiceProvider";
import camelize from "../../utilities/camelize";

export default class AutoRegisterDirectiveServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@app/directives", true, /^\.\/.*\.(ts|js)$/);
    files.keys().forEach((filename) => {
      Vue.directive(this.getDirectiveName(filename), files(filename).default);
    });
  }

  protected getDirectiveName(filename: string) {
    return camelize(filename.replace(/(\.ts|\.js|\/)/g, ""));
  }
}
