import Vue from "vue";
import { PluginObject } from "vue";
import FormsPlugin from "./FormsPlugin";
import ServiceProvider from "../../support/ServiceProvider";

export default class FormServiceProvider extends ServiceProvider {
  public boot() {
    Vue.use(this.app.make<PluginObject<any>>("FormService"));
  }
  public register() {
    this.app.singleton("FormService", FormsPlugin);
  }
}
