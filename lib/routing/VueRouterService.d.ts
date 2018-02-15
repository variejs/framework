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
    protected wildCardRoutes: never[];
    constructor();
    getRouter(): any;
    private requireAll(requireContext);
    private buildRouter();
    route(path: string, component: string | object, props?: {}): Route;
    middleware(middleware: any): this;
    redirect(path: any, redirect: any): void;
    group(routes: any): this;
    layout(layout: any): this;
    prefix(prefix: any): this;
    private registerMiddleware();
    private _resetGroup();
}
