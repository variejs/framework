export default class Route {
    private path;
    private meta;
    private name;
    private alias;
    private props;
    private component;
    private components;
    private _props;
    constructor(path: any, components: any, meta: any, props?: {});
    setName(name: string): this;
    setAlias(alias: any): void;
}
