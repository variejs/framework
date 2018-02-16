export default class Route {
    private meta;
    private component;
    private path;
    private name;
    private alias;
    private props;
    private _props;
    private components;
    constructor(path: string, components: object | Array<string>, props?: {});
    setName(name: string): this;
    setMeta(data: Object): this;
    setAlias(alias: any): void;
}
