import * as camelCase from "camelcase";

export default class Route {
  private path;
  private meta;
  private name;
  private alias;
  private props;
  private component;
  private components;
  private _props = false;

  constructor(path, components, meta, props = {}) {
    this.path = path;
    this.meta = meta || {};
    if (meta.template && meta.template) {
      meta.template.component = require(`@views/${meta.template.template}`);
    }

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
    let prefix = this.meta.prefix ? this.meta.prefix + "/" : "";
    let name = `${prefix}${path}`;
    this.name = camelCase(name.replace(/\//g, " "));
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
