import { ActionContext } from "vuex";
// @ts-ignore - unreachable
import RootState from "@store/rootState";
import { AlertState } from "./stateInterface";
import AlertModel from "../../models/AlertModel";

export default class Actions {
  add = (context: ActionContext<AlertState, RootState>, alert: AlertModel) => {
    context.commit("add", alert);
  };

  remove = (
    context: ActionContext<AlertState, RootState>,
    alert: AlertModel
  ) => {
    context.commit("remove", alert);
  };
}
