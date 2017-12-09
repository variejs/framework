import ApplicationInterface from "./ApplicationInterface";
import "reflect-metadata";
export declare class Application implements ApplicationInterface {
    private providers;
    private $container;
    private $providerPromises;
    constructor();
    boot(): Promise<ApplicationInterface>;
    bind<T>(abstract: string, concrete: any): void;
    singleton<T>(abstract: string, concrete: any): void;
    make<T>(abstract: string): T;
    private registerConfiguredProviders();
    private bootProviders();
}
