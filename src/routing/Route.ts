export default class Route {
  public path;
  public name;
  public alias;
  public props;

  public meta : {
    layout? : string,
    middleware?: Array<any>,
  } = {};

  public components;

  public group; // TOOD - Should we make this private?

  protected component;
  protected _props = false;

  constructor(
    path: string,
    components: string | object | Array<string>,
    props = {}
  ) {
    this.path = path;

    if (Object.keys(props).length) {
      this._props = true;
    }

    if (typeof components === "object") {
      if (this._props) {
        this.props = {};
      }
      this.components = {};

      for (let name in components) {
        let component = components[name];
        this.components[name] = require(`@views/${component}`).default;
        if (this._props) {
          this.components[name] = {
            props: props,
            component: this.components[name]
          };
          this.props[name] = true;
        }
      }
    } else {
      this.component = require(`@views/${components}`).default;
      if (this._props) {
        this.component = {
          props: props,
          component: this.component
        };
      }
    }
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
}
