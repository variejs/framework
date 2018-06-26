import NotificationModel from "./../../../notifications/models/NotificationModel";
export default class Actions {
    add: (context: any, notification: NotificationModel) => void;
    remove: (context: any, notification: NotificationModel) => void;
}
