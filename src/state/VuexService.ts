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

  public registerStore(Store: StoreModule) {
    let store = this.bindStore(Store);
    this.store.registerModule(
      this.getStoreName(store),
      this.registerSubModules(store)
    );
    return this;
  }

  private registerSubModules(store: StoreModule) {
    store.$modules.forEach(Module => {
      let module = this.bindStore(Module);
      store.modules[this.getStoreName(module)] = this.registerSubModules(
        module
      );
    });
    return store;
  }

  private getStoreName(store: StoreModule) {
    if (!store.name) {
      throw "Your store does not have a name";
    }
    return store.name;
  }

  private bindStore(Store: StoreModule) {
    let moduleAbstractName = camelCase(`store ${Store.name}`);
    this.app.singleton<StoreModule>(moduleAbstractName, Store);
    return this.app.make<StoreModule>(moduleAbstractName);
  }
}
