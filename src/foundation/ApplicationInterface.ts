import ServiceProvider from "./../support/ServiceProvider";

export default interface ApplicationInterface {
  boot(): any;
  make<T>(abstract: string): T;
  constant(key: string, constant: any): void;
  bind<T>(abstract: string, concrete: any): void;
  singleton<T>(abstract: string, concrete: any): void;
  addProvider<T>(serviceProvider: ServiceProvider);
}
