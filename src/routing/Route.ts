export default class Route {
  private path;
  private name;
  private alias;
  private props;
  private meta = {};
  private component;
  private components;
  private _props = false;

  constructor(path, components, props = {}) {
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
        this.components[name] = require(`@views/${component}`);
        if (this._props) {
          this.components[name] = {
            props: props,
            template: this.components[name]
          };
          this.props[name] = true;
        }
      }
    } else {
      this.component = require(`@views/${components}`);
      if (this._props) {
        this.component = {
          props: props,
          template: this.component
        };
      }
    }
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setMeta(data: Object): this {
    this.meta = Object.assign(this.meta, data);
    return this;
  }

  public setAlias(alias) {
    this.alias = alias;
  }
}
