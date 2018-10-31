import Vue from "vue";
import { AlertState } from "./stateInterface";
import AlertModel from "../../models/AlertModel";

export default class Mutations {
  add = (state: AlertState, alert: AlertModel) => {
    alert.id = this.guid();
    state.alerts.push(alert);
  };

  remove = (state: AlertState, alert: AlertModel) => {
    Vue.set(
      state,
      "alerts",
      state.alerts.filter(tempAlert => {
        return alert.id !== tempAlert.id;
      })
    );
  };

  // TODO - this needs to be moved out
  private guid() {
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
