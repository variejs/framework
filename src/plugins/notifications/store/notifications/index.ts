import state from "./state";
import Actions from "./actions";
import Mutations from "./mutations";
import { injectable } from "inversify";

@injectable()
export default class Notifications {
  public name;
  public state;
  public actions;
  public mutations;
  public namespaced;

  constructor() {
    this.state = state;
    this.namespaced = true;
    this.name = "notifications";
    this.actions = new Actions();
    this.mutations = new Mutations();
  }
}
