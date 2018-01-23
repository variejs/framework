import HttpServiceInterface from "./HttpServiceInterface";
export default class AxiosHttpService implements HttpServiceInterface {
    private axios;
    private _middleware;
    constructor($config: any);
    delete(url: string, config?: {}): any;
    get(url: string, config?: {}): any;
    head(url: string, config?: {}): any;
    options(url: string, config?: {}): any;
    post(url: string, data: object, config?: {}): any;
    put(url: string, data: object, config?: {}): any;
    patch(url: string, data: object, config?: {}): any;
    private _makeRequest(method, config, url, data?);
    registerMiddleware(Middleware: any): void;
    unregisterMiddleware(Middleware: any): void;
}
