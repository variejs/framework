import HttpErrorInterface from "./HttpErrorInterface";
import HttpResponseInterface from "./HttpResponseInterface";
import HttpRequestConfigInterface from "./HttpRequestConfigInterface";

export default interface HttpMiddlewareInterface {
  request(config: HttpRequestConfigInterface): HttpRequestConfigInterface;
  response(response: HttpResponseInterface): HttpResponseInterface;
  responseError(responseError: HttpErrorInterface);
}
