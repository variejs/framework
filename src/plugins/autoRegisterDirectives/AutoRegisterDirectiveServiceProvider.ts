import ServiceProvider from "../../support/ServiceProvider";

export default class AutoRegisterDirectiveServiceProvider extends ServiceProvider {
  public register() {}

  public boot() {
    let files = require.context("@app/directives", true, /^\.\/.*\.(ts|js)$/);
    files.keys().forEach(filename => {
      files(filename);
    });
  }
}
