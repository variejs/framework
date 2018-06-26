import Route from "./Route";

export default interface RouterInterface {
  getRouter(): any;
  route(path: string, component: string | {}): Route;
  group(routes: Array<any> | Object): RouterInterface;
  middleware(middleware: Array<any>): RouterInterface;
  prefix(prefix: string): RouterInterface;
  layout(layout: string): this;
  redirect(path: string, redirect: string): this;
}
