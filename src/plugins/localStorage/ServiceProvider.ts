import ServiceProvider from "../../support/ServiceProvider";
import LocalStorageInterface from './LocalStorageInterface';
import LocalStorageService from './LocalStorageService';

export default class LocalStorageServiceProvider extends ServiceProvider {

    public boot() {
        this.app.make<LocalStorageService>("localStorageService");
    }

    public register() {
        this.app.singleton<LocalStorageInterface>("localStorageService", LocalStorageService);
    }
}
