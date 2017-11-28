import Route from "./Route";

export default interface RouterInterface {
  getRouter(): RouterInterface;
  route(path: string, component: string | {}): Route;
  group(routes: Array<any> | Object): RouterInterface;
  middleware(middleware: Array<any>): RouterInterface;
  prefix(prefix: string): RouterInterface;
  template(path: string, template: string): this;
  redirect(path: string, redirect: string): this;
};
