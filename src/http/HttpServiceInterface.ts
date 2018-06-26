export default interface HttpServiceInterface {
  get(url: string, config?: object);
  put(url: string, data: object, config?: object);
  post(url: string, data?: object, config?: object);
  patch(url: string, data: object, config?: object);
  delete(url: string, config?: object);
  head(url: string, config?: object);
  options(url: string, config?: object);
  registerMiddleware(middleware: () => void);
  unregisterMiddleware(middleware: () => void);
}
