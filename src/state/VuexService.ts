import Vue from "vue";
import * as camelCase from "camelcase";
import Vuex, { Module, Store } from "vuex";
import { inject, injectable } from "inversify";
import StateServiceInterface from "./StateServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";

@injectable()
export default class VuexService implements StateServiceInterface {
  private app: ApplicationInterface;

  protected store: Store<any>;

  constructor(@inject("app") app: ApplicationInterface) {
    Vue.use(Vuex);
    this.app = app;
    this.store = new Vuex.Store<any>({});
    this.store.registerModule("varie", {
      namespaced: true
    });
  }

  public getStore(): Store<any> {
    return this.store;
  }

  public registerStore(Store: Store, paths: Array<string> = []) {
    paths.push(Store.name.toLowerCase());
    let store = this.bindStore(Store);

    this.store.registerModule(paths, store);

    store.$modules.forEach(module => {
      this.registerStore(module, paths);
    });
  }

  private bindStore(store) {
    let moduleAbstractName = camelCase(`store ${store.name}`);
    $app.$container.bind(moduleAbstractName).to(store);
    return this.app.make<Module<any, any>>(moduleAbstractName);
  }
}
