import { Store } from "vuex";
declare class NotificationService {
    constructor(config: any, store: any);
    protected __store: Store<object>;
    showError(message: string, title: string, duration?: number): void;
    showInfo(message: string, title: string, duration?: number): void;
    showSuccess(message: string, title: string, duration?: number): void;
    showWarning(message: string, title: string, duration?: number): void;
    private _makeAlert(message, title, duration?, severity?);
}
export default NotificationService;
