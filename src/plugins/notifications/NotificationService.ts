import { Store } from "vuex";
import { inject, injectable } from "inversify";
import ConfigInterface from "../../config/ConfigInterface";
import StateServiceInterface from "../../state/StateServiceInterface";

@injectable()
class NotificationService {
  protected store: Store<object>;
  protected configService: {
    duration: number;
  };

  constructor(
    @inject("ConfigService") $config: ConfigInterface,
    @inject("StateService") stateService: StateServiceInterface
  ) {
    this.store = stateService.getStore();
    this.configService = $config.get("notifications");
  }

  public showError(
    message: string,
    title: string = "Error",
    duration?: number
  ) {
    this._makeAlert(message, title, duration, "error");
  }

  public showInfo(message: string, title: string = "Info", duration?: number) {
    this._makeAlert(message, title, duration, "info");
  }

  public showSuccess(
    message: string,
    title: string = "Success",
    duration?: number
  ) {
    this._makeAlert(message, title, duration, "success");
  }

  public showWarning(
    message: string,
    title: string = "Warning",
    duration?: number
  ) {
    this._makeAlert(message, title, duration, "warning");
  }

  private _makeAlert(
    message: string,
    title: string,
    duration?: number,
    severity?: string
  ) {
    if (duration === undefined) {
      duration = this.configService.duration;
    }
    this.store.dispatch("varie/notifications/add", {
      message: message,
      duration: duration,
      severity: severity,
      title: title ? title : `${severity}!!`
    });
  }
}

export default NotificationService;
