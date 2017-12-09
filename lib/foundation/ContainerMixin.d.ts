import ApplicationInterface from "./ApplicationInterface";
export default class ContainerMixin {
    app: ApplicationInterface;
    registerMixin(app: ApplicationInterface): void;
}
