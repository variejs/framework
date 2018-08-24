import Route from "./Route";
import RoutesInterface from "./RoutesInterface";

export default interface RouterInterface {
  getRouter(): any;
  route(path: string, component: string | {}): Route;
  group(routes: Function): this;
  middleware(middleware: Array<any>): this;
  prefix(prefix: string);
  area(area: string): this;
  redirect(path: string, redirect: string): this;
  layout(layout: string): this;
  register(RouteClass: RoutesInterface);
}
