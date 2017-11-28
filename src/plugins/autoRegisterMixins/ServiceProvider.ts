import Vue from 'vue';
import ServiceProvider from "../../support/ServiceProvider";

export default class CommonServiceProvider extends ServiceProvider {

  public register() {

  }

  public boot() {
    try {
      let files = require.context("@app/mixins", true, /^\.\/.*\.(ts|js)$/);
      files.keys().forEach(filename => {
        Vue.mixin(files(filename));
      });
    } catch (e) {
      console.warn(
        "You are trying to auto load mixins, but do not have a mixins folder, please create `app/mixins` folder."
      );
    }
  }
}
