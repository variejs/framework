export default class Route {
  public path;
  public name;
  public alias;
  public group;
  public props;
  public components;
  public meta: {
    data?: object;
    layout?: string;
    middleware?: Array<any>;
  } = {};

  protected component;

  constructor(
    path: string,
    components: string | object | Array<string>,
    props = {},
  ) {
    this.path = path;
    this.props = props;

    this.registerComponents(components);
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setMeta(data): this {
    this.meta = Object.assign(this.meta, data);
    return this;
  }

  public setAlias(alias) {
    this.alias = alias;
    return this;
  }

  public setLayout(layout) {
    this.meta.layout = layout;
    return this;
  }

  protected registerComponents(components) {
    if (typeof components === "object" && !components.__file) {
      this.components = {};
      for (let name in components) {
        this.components[name] = components[name];
      }
    } else {
      this.component = components;
    }
  }
}
