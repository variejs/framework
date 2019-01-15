import { ActionContext } from "vuex";
// @ts-ignore - unreachable
import RootState from "@store/rootState";
import { AlertState } from "./stateInterface";
import AlertModel from "./../models/AlertModel";

export default class Actions {
  public add = (
    context: ActionContext<AlertState, RootState>,
    alert: AlertModel
  ) => {
    context.commit("add", alert);
  };

  public remove = (
    context: ActionContext<AlertState, RootState>,
    alert: AlertModel
  ) => {
    context.commit("remove", alert);
  };
}
