import * as _ from "lodash";
import { Store } from "vuex";

class NotificationService {
  protected __config: {
    duration: number | undefined;
  };

  protected __store: Store<object>;

  constructor(config: object, store: Store<object>) {
    this.__store = store;
    this.__config = _.merge(this.__config, config);
  }

  public showError(message: string, title: string, duration?: number) {
    this._makeAlert(message, title, duration, "error");
  }

  public showInfo(message: string, title: string, duration?: number) {
    this._makeAlert(message, title, duration, "info");
  }

  public showSuccess(message: string, title: string, duration?: number) {
    this._makeAlert(message, title, duration, "success");
  }

  public showWarning(message: string, title: string, duration?: number) {
    this._makeAlert(message, title, duration, "warning");
  }

  private _makeAlert(
    message: string,
    title: string,
    duration?: number,
    severity?: string
  ) {
    if (duration === undefined) {
      duration = this.__config.duration;
    }
    this.__store.dispatch("varie/notifications/add", {
      message: message,
      duration: duration,
      severity: severity,
      title: !_.isEmpty(title) ? title : `${_.startCase(_.toLower(severity))}!!`
    });
  }
}

export default NotificationService;
