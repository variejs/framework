import Route from "./Route";
import VueRouter from "vue-router";
import RouterInterface from "./RouterInterface";
export default class VueRouterService implements RouterInterface {
    routes: never[];
    router: VueRouter;
    protected groupInfo: null;
    protected groupMeta: never[];
    loaded: boolean;
    oldMeta: {};
    groups: never[];
    constructor();
    getRouter(): any;
    private currentGroupLevel;
    private buildRouter();
    private _getPaths(routes, tempRoutes);
    route(path: any, component: string | {}, props?: {}): Route;
    middleware(middleware: any): this;
    redirect(path: any, redirect: any): void;
    group(path: any, routes: any): this;
    template(template: any): this;
    prefix(prefix: any): this;
    private requireAll(requireContext);
    private registerMiddleware();
    private _resetGroup();
}
