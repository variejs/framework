import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { NotificationsState } from "./stateInterface";
import NotificationModel from "./../../../notifications/models/NotificationModel";

export default class Actions {
  add = (
    context: ActionContext<NotificationsState, RootState>,
    notification: NotificationModel
  ) => {
    context.commit("add", notification);
  };

  remove = (
    context: ActionContext<NotificationsState, RootState>,
    notification: NotificationModel
  ) => {
    context.commit("remove", notification);
  };
}
