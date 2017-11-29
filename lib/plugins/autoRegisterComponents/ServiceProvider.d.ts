import ServiceProvider from "../../support/ServiceProvider";
export default class CommonServiceProvider extends ServiceProvider {
    register(): void;
    boot(): void;
    private getComponentName(filename);
}
