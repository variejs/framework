import { NotificationsState } from "./stateInterface";
import NotificationModel from "../../models/NotificationModel";
export default class Mutations {
    add: (state: NotificationsState, notification: NotificationModel) => void;
    remove: (state: NotificationsState, notification: NotificationModel) => void;
    private guid();
}
