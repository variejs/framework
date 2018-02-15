import Route from "./Route";
import VueRouter from "vue-router";
import RouterInterface from "./RouterInterface";
export default class VueRouterService implements RouterInterface {
    routes: never[];
    router: VueRouter;
    protected groups: never[];
    protected groupMeta: never[];
    protected groupInfo: null;
    protected currentGroupLevel: number;
    constructor();
    getRouter(): any;
    private requireAll(requireContext);
    private buildRouter();
    route(path: any, component: string | {}, props?: {}): Route;
    middleware(middleware: any): this;
    redirect(path: any, redirect: any): void;
    group(path: any, routes: any): this;
    template(template: any): this;
    prefix(prefix: any): this;
    private registerMiddleware();
    private _resetGroup();
}
