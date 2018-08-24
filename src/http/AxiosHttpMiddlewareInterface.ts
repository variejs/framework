import { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

export default interface AxiosHttpMiddlewareInterface {
  request(config: AxiosRequestConfig): AxiosRequestConfig;
  response(response: AxiosResponse): AxiosResponse;
  responseError(responseError: AxiosError);
}
