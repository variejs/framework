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

  public registerStore(Store: StoreModule, topLevel = true) {
    let store = this.bindStore(Store);
    store.$modules.forEach(Module => {
      this.registerStore(Module, false);
      let module = this.app.make<StoreModule>(
        camelCase(`store ${Module.name}`)
      );
      store.modules[camelCase(module.name || Module.name)] = this.app.make(
        camelCase(`store ${Module.name}`)
      );
    });

    if (topLevel) {
      this.store.registerModule(camelCase(store.name || Store.name), store);
    }

    return this;
  }

  private bindStore(Store: StoreModule): StoreModule {
    let moduleAbstractName = camelCase(`store ${Store.name}`);
    this.app.singleton<StoreModule>(moduleAbstractName, Store);
    return this.app.make<StoreModule>(moduleAbstractName);
  }
}
