import { Store } from "vuex";
import { inject, injectable } from "inversify";
import ConfigInterface from "../../config/ConfigInterface";

@injectable()
class NotificationService {
  protected __store: Store<object>;
  protected __config: ConfigInterface;

  constructor(
    @inject("$config") $config: ConfigInterface,
    @inject("$store") $store: Store
  ) {
    this.__config = $config;
    this.__store = $store.getStore();
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
      title: title ? title : `${severity}!!`
    });
  }
}

export default NotificationService;
