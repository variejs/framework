import { Store } from "vuex";
import StateServiceInterface from "./StateServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";
export default class VuexService implements StateServiceInterface {
    private store;
    private files;
    private app;
    constructor(app: ApplicationInterface);
    getStore(): Store<any>;
    private buildModules();
    private getModule(filename);
    private createStore(filename, module);
    private getModuleName(filename);
}
