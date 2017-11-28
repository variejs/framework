import Vue from "vue";
import * as _ from "lodash";
import { injectable } from "inversify";

@injectable()
export default class VueHelperService {
  public register() {
    this.registerComponents();
  }

  private registerComponents() {
    let files = require.context("@components", true, /^\.\/.*\.(vue)$/);
    files.keys().forEach(filename => {
      Vue.component(this.getComponentName(filename), files(filename));
    });
  }

  private getComponentName(filename: string) {
    return _.kebabCase(filename.replace(".vue", ""));
  }
}
