import { Store } from "vuex";
import StateServiceInterface from "./stateServiceInterface";
export default class VuexService implements StateServiceInterface {
    private store;
    private files;
    constructor();
    getStore(): Store<any>;
    private buildModules();
    private getModule(filename);
    private createStore(filename, module);
}
