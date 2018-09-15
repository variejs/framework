import axios, { AxiosInstance } from "axios";
import { inject, injectable } from "inversify";
import HttpServiceInterface from "./HttpServiceInterface";
import ApplicationInterface from "../foundation/ApplicationInterface";
import AxiosHttpMiddlewareInterface from "./AxiosHttpMiddlewareInterface";

@injectable()
export default class AxiosHttpService implements HttpServiceInterface {
  private axios: AxiosInstance;
  private _middleware = {};
  private app: ApplicationInterface;

  constructor(
    @inject("app") app: ApplicationInterface,
    @inject("ConfigService") $config
  ) {
    this.app = app;
    let config = $config.get("http");
    this.axios = axios.create(config);
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
    return this.options(url, config);
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

  public registerMiddleware(Middleware) {
    let middlewareName = `middleware${Middleware.name}`;
    this.app.bind<AxiosHttpMiddlewareInterface>(middlewareName, Middleware);
    let middleware = this.app.make<AxiosHttpMiddlewareInterface>(
      middlewareName
    );

    this._middleware[middleware.constructor.name] = {
      request: this.axios.interceptors.request.use(config => {
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
        }
      )
    };
  }

  public unregisterMiddleware(Middleware) {
    let middleware = new Middleware().constructor.name;
    axios.interceptors.request.eject(this._middleware[middleware].request);
    axios.interceptors.response.eject(this._middleware[middleware].response);
  }
}
