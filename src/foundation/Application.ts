declare const global: any;
import "reflect-metadata";
import { Container } from "inversify";
import ContainerMixin from "./ContainerMixin";
import ApplicationInterface from "./ApplicationInterface";
import ServiceProviderInterface from "../support/ServiceProviderInterface";
import Vue from "vue";

export class Application implements ApplicationInterface {
  public $container: Container;
  public providers: Array<ServiceProviderInterface> = [];

  private $providerPromises: Array<Promise<{}>> = [];
  private $appProviders = require("@config/app").default.providers;

  constructor() {
    global.$app = this;
    Vue.prototype["$app"] = this;
    this.$container = new Container();
    this.constant("app", this);
  }

  public boot(): Promise<ApplicationInterface> {
    new ContainerMixin().registerMixin(this);

    return new Promise(resolve => {
      this.registerConfiguredProviders().then(() => {
        this.bootProviders();
        return resolve(this);
      });
    });
  }

  public bind<T>(abstract: string, concrete: any) {
    this.$container.bind(abstract).to(concrete);
  }

  public singleton<T>(abstract: string, concrete: any) {
    this.$container
      .bind(abstract)
      .to(concrete)
      .inSingletonScope();
  }

  public constant(key: string, constant: any) {
    this.$container.bind(key).toConstantValue(constant);
  }

  public make<T>(abstract: string): T {
    return this.$container.get(abstract);
  }

  private registerConfiguredProviders() {
    for (let provider in this.$appProviders) {
      let providerPromise = new Promise(resolve => {
        let appProvider = this.getAppProvider(provider);
        if (appProvider instanceof Promise) {
          return appProvider.then(() => {
            return resolve();
          });
        }
        resolve();
      });
      this.$providerPromises.push(providerPromise);
    }
    return Promise.all(this.$providerPromises);
  }

  private getAppProvider(provider: string): ServiceProviderInterface {
    return new this.$appProviders[provider](this).register();
  }

  private bootProviders() {
    Object.values(this.providers).forEach(
      (provider: ServiceProviderInterface) => {
        provider.boot();
      }
    );
  }
}
