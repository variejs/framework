import HttpMiddlewareInterface from "./interfaces/HttpMiddlewareInterface";
import HttpRequestConfigInterface from "./interfaces/HttpRequestConfigInterface";
import HttpResponseInterface from "./interfaces/HttpResponseInterface";

export default interface HttpServiceInterface {
  get(
    url: string,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  put(
    url: string,
    data: object,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  post(
    url: string,
    data?: object,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  patch(
    url: string,
    data: object,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  delete(
    url: string,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  head(
    url: string,
    config?: HttpRequestConfigInterface,
  ): Promise<HttpResponseInterface>;
  options(url: string, config?: HttpRequestConfigInterface);
  request(config?: HttpRequestConfigInterface);
  registerMiddleware(middleware: new () => HttpMiddlewareInterface);
  unregisterMiddleware(middleware: new () => HttpMiddlewareInterface);
}
