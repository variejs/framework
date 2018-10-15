import { injectable } from "inversify";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import HttpMiddlewareInterface from "varie/lib/http/HttpMiddlewareInterface";

@injectable()
export default class temp implements HttpMiddlewareInterface {
  public request(config: AxiosRequestConfig) {
    return config;
  }

  public response(response: AxiosResponse) {
    return response;
  }

  public responseError(error: AxiosError) {
    return error;
  }
}
