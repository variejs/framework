import Vue from "vue";
import Vuex, { Store } from "vuex";
import { injectable } from "inversify";
import StateServiceInterface from "./StateServiceInterface";

@injectable()
export default class VuexService implements StateServiceInterface {
  private store = null;
  private files = null;

  constructor() {
    Vue.use(Vuex);
    this.store = new Vuex.Store<any>({});
    this.store = this.buildModules();
    this.store.registerModule("varie", {
      namespaced: true
    });
  }

  public getStore(): Store<any> {
    return this.store;
  }

  private buildModules() {
    try {
      this.files = require.context("@store", true, /^\.\/.*index\.(ts)$/);
      this.files.keys().forEach(filename => {
        this.createStore(filename, this.getModule(filename));
      });
    } catch (e) {
      console.warn(
        "You have loaded the store module without having a store folder, please add `app/store` folder!"
      );
    }

    return this.store;
  }

  private getModule(filename) {
    let module = this.files(filename).default;
    module.modules = {};
    module.namespaced = true;
    return module;
  }

  private createStore(filename, module) {
    this.store.registerModule(
      filename
        .replace(/^\.\//, "")
        .replace(/index\.ts/, "")
        .replace(/index\.js/, "")
        .replace(/\/$/, "")
        .replace(/modules\//g, "")
        .split("/"),
      module
    );
  }
}
