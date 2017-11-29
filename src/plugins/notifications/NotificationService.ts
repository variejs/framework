import { Store } from "vuex";

class NotificationService {

  constructor(config, store) {
    this.__store = store;
    this.__config = config;
  }

  protected __store: Store<object>;

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
      title: title ? title : `${severity}!!`
    });
  }
}

export default NotificationService;
