import Route from "./Route";

export default interface RouterInterface {
  getRouter(): any;
  route(
    path: string,
    component: object,
    props?: (() => void) | boolean | object,
  ): Route;
  group(routes: Function): this;
  middleware(middleware: Array<any>): this;
  prefix(prefix: string): this;
  area(area: object): this;
  redirect(path: string, redirect: string): this;
  layout(layout: string): this;
  data(data: object): this;
  // TODO - this should not be any
  register(routes: any, ...services: Array<any>): this;
}
