import Vue from "vue";
import Vuex, { Store } from "vuex";
import StoreModule from "./StoreModule";
import * as camelCase from "camelcase";
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

  public registerStore(Store: StoreModule, paths: Array<string> = []) {
    let store = this.bindStore(Store);
    paths.push(store.name || Store.name.toLowerCase());
    this.store.registerModule(paths, store);
    store.$modules.forEach(module => {
      this.registerStore(module, paths);
    });
  }

  private bindStore(Store: StoreModule): StoreModule {
    let moduleAbstractName = camelCase(`store ${Store.name}`);
    this.app.singleton<StoreModule>(moduleAbstractName, Store);
    return this.app.make<StoreModule>(moduleAbstractName);
  }
}
