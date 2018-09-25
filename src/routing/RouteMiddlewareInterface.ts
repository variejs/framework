import { Route } from "vue-router";

export default interface RouteMiddlewareInterface {
  handler(to: Route, from: Route, next: Route | void);
}
