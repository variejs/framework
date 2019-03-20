import HttpRequestConfigInterface from "./HttpRequestConfigInterface";
import HttpResponseInterface from "./HttpResponseInterface";

export default interface HttpRequestInterface extends Error {
  config: HttpRequestConfigInterface;
  code?: string;
  request?: any;
  response?: HttpResponseInterface;
}
