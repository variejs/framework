import { Route } from "vue-router";
import { injectable } from "inversify";

@injectable()
export default interface RouteMiddlewareInterface {
  passes(to: Route, from: Route, next: () => void): boolean;
}
