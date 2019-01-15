import Vue from "vue";
import "reflect-metadata";
import { Container } from "inversify";
import ContainerMixin from "./ContainerMixin";
import ApplicationInterface from "./ApplicationInterface";
import ServiceProviderInterface from "../support/ServiceProviderInterface";

declare const global: any;

export class Application implements ApplicationInterface {
  protected app;
  protected container: Container;

  private providers: Array<ServiceProviderInterface> = [];
  private appProviders = require("@config/app").default.providers;

  constructor() {
    this.app = this;
    global.$app = this.app;
    Vue.prototype["$app"] = this.app;
    this.container = new Container();
    this.constant("app", this.app);
  }

  public async boot(): Promise<ApplicationInterface> {
    new ContainerMixin().registerMixin(this);
    await this.registerConfiguredProviders();
    await this.bootProviders();
    return this;
  }

  public bind<T>(abstract: string, concrete: any) {
    this.container.bind(abstract).to(concrete);
  }

  public singleton<T>(abstract: string, concrete: any) {
    this.container
      .bind(abstract)
      .to(concrete)
      .inSingletonScope();
  }

  public constant(key: string, constant: any) {
    this.container.bind(key).toConstantValue(constant);
  }

  public make<T>(abstract: string): T {
    return this.container.get(abstract);
  }

  public addProvider(provider) {
    this.providers.push(provider);
  }

  private async registerConfiguredProviders() {
    for (let provider in this.appProviders) {
      await this.getAppProvider(provider);
    }
  }

  private async getAppProvider(
    provider: string
  ): Promise<ServiceProviderInterface> {
    return new this.appProviders[provider](this.app).register();
  }

  private async bootProviders() {
    for (const provider in this.providers) {
      await this.providers[provider].boot();
    }
  }
}
