import HttpRequestConfigInterface from "./HttpRequestConfigInterface";

export default interface HttpResponseInterface<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: HttpRequestConfigInterface;
  request?: any;
}
