import axios from "axios";
import HttpServiceInterface from "./HttpServiceInterface";
import { inject, injectable } from "inversify";

@injectable()
export default class AxiosHttpService implements HttpServiceInterface {
  private axios;
  private _middleware = {};

  constructor(@inject("$config") $config) {
    let config = $config.get("http");
    this.axios = axios.create(config);

    require("@app/middleware").default.forEach(middleware => {
      this.registerMiddleware(middleware);
    });
  }

  public delete(url: string, config = {}) {
    return this._makeRequest("delete", config, url);
  }

  public get(url: string, config = {}) {
    return this._makeRequest("get", config, url);
  }

  public head(url: string, config = {}) {
    return this._makeRequest("head", config, url);
  }

  public options(url: string, config = {}) {
    return this._makeRequest("options", config, url);
  }

  public post(url: string, data: object, config = {}) {
    return this._makeRequest("post", config, url, data);
  }

  public put(url: string, data: object, config = {}) {
    return this._makeRequest("put", config, url, data);
  }

  public patch(url: string, data: object, config = {}) {
    return this._makeRequest("patch", config, url, data);
  }

  private _makeRequest(
    method: string,
    config = {},
    url: string,
    data?: object
  ) {
    return this.axios[method](url, data, config);
  }

  public registerMiddleware(Middleware) {
    let middleware = new Middleware();

    this._middleware[middleware.constructor.name] = {
      request: this.axios.interceptors.request.use(config => {
        return middleware.request(config);
      }),
      response: this.axios.interceptors.response.use(
        function(response) {
          return middleware.response(response);
        },
        function(error) {
          if (middleware.responseError) {
            return middleware.responseError(error);
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
