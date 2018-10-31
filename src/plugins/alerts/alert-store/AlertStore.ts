import state from "./state";
import Actions from "./actions";
import Mutations from "./mutations";
import { injectable } from "inversify";

@injectable()
export default class AlertStore {
  public name;
  public state;
  public actions;
  public mutations;
  public namespaced;

  constructor() {
    this.state = state;
    this.name = "alerts";
    this.namespaced = true;
    this.actions = new Actions();
    this.mutations = new Mutations();
  }
}
