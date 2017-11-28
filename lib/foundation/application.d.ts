import "reflect-metadata";
export declare class Application {
    private providers;
    private $container;
    private $providerPromises;
    constructor();
    boot(): Promise<{}>;
    private registerConfiguredProviders();
    private bootProviders();
}
