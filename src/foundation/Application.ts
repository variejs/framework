import ApplicationInterface from "./ApplicationInterface";

declare const global: any;

import ContainerMixin from "./ContainerMixin";
import "reflect-metadata";
import { Container } from "inversify";

export class Application implements ApplicationInterface {
  private providers = [];
  private $container: Container;
  private $providerPromises = [];

  constructor() {
    this.$container = new Container();
    this.$container.bind("app").toConstantValue(this);
    global.app = this;
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

  public make<T>(abstract: string): T {
    return this.$container.get(abstract);
  }

  private registerConfiguredProviders() {
    let appConfig = require("@config/app").default;

    for (let provider in appConfig.providers) {
      provider = appConfig.providers[provider];
      let providerPromise = new Promise(resolve => {
        let registering = new provider(this).register();
        if (registering instanceof Promise) {
          return registering.then(() => {
            return resolve();
          });
        }
        resolve();
      });
      this.$providerPromises.push(providerPromise);
    }
    return Promise.all(this.$providerPromises);
  }

  private bootProviders() {
    for (let provider in this.providers) {
      provider = this.providers[provider];
      provider.boot();
    }
  }
}
