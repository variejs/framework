import { Store } from "vuex";
declare class NotificationService {
    protected __config: {
        duration: number | undefined;
    };
    protected __store: Store<object>;
    constructor(config: object, store: Store<object>);
    showError(message: string, title: string, duration?: number): void;
    showInfo(message: string, title: string, duration?: number): void;
    showSuccess(message: string, title: string, duration?: number): void;
    showWarning(message: string, title: string, duration?: number): void;
    private _makeAlert(message, title, duration?, severity?);
}
export default NotificationService;
