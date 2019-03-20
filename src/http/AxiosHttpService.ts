import axios, { AxiosInstance } from "axios";
import { inject, injectable } from "inversify";
import HttpServiceInterface from "./HttpServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";
import HttpMiddlewareInterface from "./interfaces/HttpMiddlewareInterface";
import HttpRequestConfigInterface from "./interfaces/HttpRequestConfigInterface";

@injectable()
export default class AxiosHttpService implements HttpServiceInterface {
  protected middleware = {};
  protected axios: AxiosInstance;
  protected app: ApplicationInterface;

  constructor(
    @inject("app") app: ApplicationInterface,
    @inject("ConfigService") configService,
  ) {
    this.app = app;
    this.axios = axios.create(configService.get("http"));
  }

  public delete(url: string, config: HttpRequestConfigInterface = {}) {
    return this.axios.delete(url, config);
  }

  public get(url: string, config: HttpRequestConfigInterface = {}) {
    return this.axios.get(url, config);
  }

  public head(url: string, config: HttpRequestConfigInterface = {}) {
    return this.axios.head(url, config);
  }

  public options(url: string, config: HttpRequestConfigInterface = {}) {
    return this.options(url, config);
  }

  public post(
    url: string,
    data: object,
    config: HttpRequestConfigInterface = {},
  ) {
    return this.axios.post(url, data, config);
  }

  public put(
    url: string,
    data: object,
    config: HttpRequestConfigInterface = {},
  ) {
    return this.axios.put(url, data, config);
  }

  public patch(
    url: string,
    data: object,
    config: HttpRequestConfigInterface = {},
  ) {
    return this.axios.patch(url, data, config);
  }

  public request(config: HttpRequestConfigInterface = {}) {
    return this.axios.request(config);
  }

  public registerMiddleware(Middleware) {
    let middlewareName = `httpMiddleware${Middleware.name}`;
    this.app.bind<HttpMiddlewareInterface>(middlewareName, Middleware);
    let middleware = this.app.make<HttpMiddlewareInterface>(middlewareName);

    this.middleware[middleware.constructor.name] = {
      request: this.axios.interceptors.request.use((config) => {
        if (middleware.request) {
          return middleware.request(config);
        }
        return config;
      }),
      response: this.axios.interceptors.response.use(
        function(response) {
          if (middleware.response) {
            return middleware.response(response);
          }
          return response;
        },
        function(error) {
          if (middleware.responseError) {
            return Promise.reject(middleware.responseError(error));
          }
          return Promise.reject(error);
        },
      ),
    };
  }

  public unregisterMiddleware(Middleware) {
    let middleware = new Middleware().constructor.name;
    axios.interceptors.request.eject(this.middleware[middleware].request);
    axios.interceptors.response.eject(this.middleware[middleware].response);
  }
}
