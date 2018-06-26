import { VueConstructor } from "vue/types/vue";
declare class Notifications {
    protected __config: {
        duration: number;
        component: any;
    };
    install(Vue: VueConstructor, {store, service}: {
        store: any;
        service: any;
    }): void;
}
export default Notifications;
