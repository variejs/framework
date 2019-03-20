import HttpRequestConfigInterface from "./interfaces/HttpRequestConfigInterface";

export default interface HttpServiceInterface {
  get(url: string, config?: HttpRequestConfigInterface);
  put(url: string, data: object, config?: HttpRequestConfigInterface);
  post(url: string, data?: object, config?: HttpRequestConfigInterface);
  patch(url: string, data: object, config?: HttpRequestConfigInterface);
  delete(url: string, config?: HttpRequestConfigInterface);
  head(url: string, config?: HttpRequestConfigInterface);
  options(url: string, config?: HttpRequestConfigInterface);
  request(config?: HttpRequestConfigInterface);
  registerMiddleware(middleware: () => void);
  unregisterMiddleware(middleware: () => void);
}
