import { Route, Location } from "vue-router";

export default interface RouteMiddlewareInterface {
  handler(to: Route, from: Route, next: (route?: Location) => void): void;
}
