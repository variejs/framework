import { NotificationsState } from "./stateInterface";
import NotificationModel from "../../models/NotificationModel";
export declare const add: (state: NotificationsState, notification: NotificationModel) => void;
export declare const remove: (state: NotificationsState, notification: NotificationModel) => void;
