import { Route } from "vue-router";

export default interface RouteMiddlewareInterface {
  passes(to: Route, from: Route, next: () => void): boolean;
}
