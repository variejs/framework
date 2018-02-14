export default class Route {
    private path;
    private name;
    private alias;
    private props;
    private meta;
    private component;
    private components;
    private groupLevel;
    private _props;
    constructor(path: any, components: any, groupLevel: any, props?: {});
    setName(name: string): this;
    setMeta(data: Object): this;
    setAlias(alias: any): void;
}
