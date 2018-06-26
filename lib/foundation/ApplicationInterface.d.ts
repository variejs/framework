import { Container } from "inversify";
export default interface ApplicationInterface {
    boot(): any;
    make<T>(abstract: string): T;
    bind<T>(abstract: string, concrete: any): void;
    singleton<T>(abstract: string, concrete: any): void;
    $container: Container;
}
