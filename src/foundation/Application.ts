declare const global: any;

import "reflect-metadata";
import * as _ from "lodash";
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
    _.each(appConfig.providers, provider => {
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
    });
    return Promise.all(this.$providerPromises);
  }

  private bootProviders() {
    _.each(this.providers, provider => {
      provider.boot();
    });
  }
}
