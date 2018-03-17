import { Store } from "vuex";
import ConfigInterface from "../../config/ConfigInterface";
declare class NotificationService {
    protected __store: Store<object>;
    protected __config: ConfigInterface;
    constructor($config: ConfigInterface, $store: Store);
    showError(message: string, title: string, duration?: number): void;
    showInfo(message: string, title: string, duration?: number): void;
    showSuccess(message: string, title: string, duration?: number): void;
    showWarning(message: string, title: string, duration?: number): void;
    private _makeAlert(message, title, duration?, severity?);
}
export default NotificationService;
