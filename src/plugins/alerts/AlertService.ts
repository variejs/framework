import { Store } from "vuex";
import { inject, injectable } from "inversify";
import ConfigInterface from "../../config/ConfigInterface";
import StateServiceInterface from "../../state/StateServiceInterface";

@injectable()
class AlertService {
  protected store: Store<object>;
  protected configService: {
    duration: number;
  };

  constructor(
    @inject("ConfigService") $config: ConfigInterface,
    @inject("StateService") stateService: StateServiceInterface
  ) {
    this.store = stateService.getStore();
    this.configService = $config.get("alerts");
  }

  public error(message: string, title: string = "Error", duration?: number) {
    this._makeAlert(message, title, duration, "error");
  }

  public info(message: string, title: string = "Info", duration?: number) {
    this._makeAlert(message, title, duration, "info");
  }

  public success(
    message: string,
    title: string = "Success",
    duration?: number
  ) {
    this._makeAlert(message, title, duration, "success");
  }

  public warning(
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
    this.store.dispatch("varie/alerts/add", {
      message: message,
      duration: duration,
      severity: severity,
      title: title ? title : `${severity}!!`
    });
  }
}

export default AlertService;
