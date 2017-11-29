declare const global: any;

import "reflect-metadata";
import { Container } from "inversify";

export class Application {
  private providers = [];
  private $container: Container;
  private $providerPromises = [];

  constructor() {
    this.$container = new Container();
    global.$container = this.$container;
    this.$container.bind("app").toConstantValue(this);
  }

  public boot() {
    return new Promise(resolve => {
      this.registerConfiguredProviders().then(() => {
        this.bootProviders();
        return resolve();
      });
    });
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
