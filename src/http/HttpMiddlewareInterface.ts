import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export default interface HttpMiddlewareInterface {
  request(config: AxiosRequestConfig);
  response(response: AxiosResponse);
  responseError(responseError: AxiosError);
}
