export default interface HttpMiddlewareInterface {
  request<T>(config: T): T;
  response<T>(response: T): T;
  responseError<T>(responseError: T): T;
}
