import ServiceProviderInterface from "./ServiceProviderInterface";
import ApplicationInterface from "./../foundation/ApplicationInterface";
export default class ServiceProvider implements ServiceProviderInterface {
    protected app: ApplicationInterface;
    constructor(app: ApplicationInterface);
    protected mergeConfigFrom(frameworkConfig: {}, key: string): void;
    boot(): void;
}
