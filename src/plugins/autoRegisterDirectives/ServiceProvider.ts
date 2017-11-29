import Vue from "vue";
import ServiceProvider from "../../support/ServiceProvider";

export default class CommonServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    try {
      let files = require.context("@app/directives", true, /^\.\/.*\.(ts|js)$/);
      files.keys().forEach(filename => {
        files(filename);
      });
    } catch (e) {
      console.warn(
        "You are trying to auto load directives, but do not have a directives folder, please create `app/directives` folder."
      );
    }
  }
}
