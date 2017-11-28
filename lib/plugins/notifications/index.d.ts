import { VueConstructor } from "vue/types/vue";
declare class Notifications {
    protected __config: {
        duration: number;
        component: any;
    };
    private _service;
    install(Vue: VueConstructor, {store}: {
        store: any;
    }): void;
}
export default Notifications;
