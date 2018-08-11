declare const global: any;
import "reflect-metadata";
import { Container } from "inversify";
import ContainerMixin from "./ContainerMixin";
import ApplicationInterface from "./ApplicationInterface";
import ServiceProviderInterface from "../support/ServiceProviderInterface";

export class Application implements ApplicationInterface {
  public $container: Container;
  public providers: Array<ServiceProviderInterface> = [];

  private $providerPromises: Array<Promise<{}>> = [];
  private $appProviders = require("@config/app").default.providers;

  constructor() {
    this.$container = new Container();
    this.constant("app", this);
    global.$app = this;
  }

  public boot(): Promise<ApplicationInterface> {
    new ContainerMixin().registerMixin(global.$app);

    return new Promise(resolve => {
      this.registerConfiguredProviders().then(() => {
        this.bootProviders();
        return resolve(global.$app);
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
