import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { inject, injectable } from "inversify";
import HttpServiceInterface from "./HttpServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";
import HttpMiddlewareInterface from "./interfaces/HttpMiddlewareInterface";

@injectable()
export default class AxiosHttpService implements HttpServiceInterface {
  protected middleware = {};
  protected axios: AxiosInstance;
  protected app: ApplicationInterface;

  constructor(
    @inject("app") app: ApplicationInterface,
    @inject("ConfigService") configService
  ) {
    this.app = app;
    this.axios = axios.create(configService.get("http"));
  }

  public delete(url: string, config = {}) {
    return this.axios.delete(url, config);
  }

  public get(url: string, config = {}) {
    return this.axios.get(url, config);
  }

  public head(url: string, config = {}) {
    return this.axios.head(url, config);
  }

  public options(url: string, config = {}) {
    // https://github.com/axios/axios/pull/2341
    // @ts-ignore
    return this.axios.options(url, config);
  }

  public post(url: string, data: object, config = {}) {
    return this.axios.post(url, data, config);
  }

  public put(url: string, data: object, config = {}) {
    return this.axios.put(url, data, config);
  }

  public patch(url: string, data: object, config = {}) {
    return this.axios.patch(url, data, config);
  }

  public request(config = {}) {
    return this.axios.request(config);
  }

  public registerMiddleware(Middleware: new () => HttpMiddlewareInterface) {
    let middlewareName = `httpMiddleware${Middleware.name}`;
    this.app.bind<HttpMiddlewareInterface>(middlewareName, Middleware);
    let middleware = this.app.make<HttpMiddlewareInterface>(middlewareName);
    this.middleware[middleware.constructor.name] = {
      request: this.axios.interceptors.request.use(config => {
        if (middleware.request) {
          return <AxiosRequestConfig>middleware.request(config);
        }
        return config;
      }),
      response: this.axios.interceptors.response.use(
        function(response) {
          if (middleware.response) {
            return <AxiosResponse>middleware.response(response);
          }
          return response;
        },
        function(error) {
          if (middleware.responseError) {
            return Promise.reject(middleware.responseError(error));
          }
          return Promise.reject(error);
        }
      )
    };
  }

  public unregisterMiddleware(Middleware: new () => HttpMiddlewareInterface) {
    let middleware = new Middleware().constructor.name;
    axios.interceptors.request.eject(this.middleware[middleware].request);
    axios.interceptors.response.eject(this.middleware[middleware].response);
  }
}
