import Route from "./Route";
import VueRouter from "vue-router";
import RouterInterface from "./RouterInterface";
export default class VueRouterService implements RouterInterface {
    routes: never[];
    router: VueRouter;
    protected currentMeta: null;
    protected groupMeta: never[];
    loaded: boolean;
    constructor();
    getRouter(): any;
    private buildRouter();
    route(path: any, component: string | {}, props?: {}): Route;
    middleware(middleware: any): this;
    redirect(path: any, redirect: any): void;
    group(routes: any): this;
    template(prefix: any, template: any): this;
    prefix(prefix: any): this;
    private requireAll(requireContext);
    private registerMiddleware();
    private _resetCurrentMeta();
}
