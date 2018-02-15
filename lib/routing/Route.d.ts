export default class Route {
    private path;
    private name;
    private alias;
    private props;
    private meta;
    private component;
    private components;
    private _props;
    constructor(path: string, components: object | Array<string>, props?: {});
    setName(name: string): this;
    setMeta(data: Object): this;
    setAlias(alias: any): void;
}
