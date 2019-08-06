import HttpErrorInterface from "./HttpErrorInterface";
import HttpResponseInterface from "./HttpResponseInterface";
import HttpRequestConfigInterface from "./HttpRequestConfigInterface";

export default interface HttpMiddlewareInterface {
  name: string;
  request(
    config: HttpRequestConfigInterface,
  ): HttpRequestConfigInterface | Promise<HttpRequestConfigInterface>;
  response(
    response: HttpResponseInterface,
  ): HttpResponseInterface | Promise<HttpResponseInterface>;
  responseError(responseError: HttpErrorInterface);
}
