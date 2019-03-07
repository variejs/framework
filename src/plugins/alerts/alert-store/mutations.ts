import Vue from "vue";
import { AlertState } from "./stateInterface";
import AlertModel from "./../models/AlertModel";

export default class Mutations {
  public add = (state: AlertState, alert: AlertModel) => {
    alert.id = this.guid();
    state.alerts.push(alert);
  };

  public remove = (state: AlertState, alert: AlertModel) => {
    Vue.set(
      state,
      "alerts",
      state.alerts.filter((tempAlert) => {
        return alert.id !== tempAlert.id;
      }),
    );
  };

  // TODO - this needs to be moved out
  protected guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
}
