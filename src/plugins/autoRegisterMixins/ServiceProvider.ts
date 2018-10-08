import Vue from "vue";
import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterMixinsServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@app/mixins", true, /^\.\/.*\.(ts|js)$/);
    files.keys().forEach(filename => {
      Vue.mixin(files(filename));
    });
  }
}
