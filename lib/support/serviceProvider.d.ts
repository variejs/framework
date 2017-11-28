import ServiceProviderInterface from "./serviceProviderInterface";
export default class ServiceProvider implements ServiceProviderInterface {
    _app: {};
    constructor(app: any);
    protected mergeConfigFrom(config: any, key: any): void;
    boot(): void;
}
