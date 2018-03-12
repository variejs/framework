export default interface HttpServiceInterface {
    get(url: string, config?: object): any;
    put(url: string, data: object, config?: object): any;
    post(url: string, data?: object, config?: object): any;
    patch(url: string, data: object, config?: object): any;
    delete(url: string, config?: object): any;
    head(url: string, config?: object): any;
    options(url: string, config?: object): any;
    registerMiddleware(middleware: () => void): any;
    unregisterMiddleware(middleware: () => void): any;
}
