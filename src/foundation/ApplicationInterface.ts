import { interfaces } from "inversify";
import Container = interfaces.Container;
import ServiceProviderInterface from "../support/ServiceProviderInterface";

export default interface ApplicationInterface {
  boot(): any;
  $container: Container;
  make<T>(abstract: string): T;
  bind<T>(abstract: string, concrete: any): void;
  singleton<T>(abstract: string, concrete: any): void;
  providers: Array<ServiceProviderInterface>;
}
