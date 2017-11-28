import * as _ from "lodash";

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

    if (_.isObject(components)) {
      if (this._props) {
        this.props = {};
      }
      this.components = {};
      _.each(components, (component, name) => {
        this.components[name] = require(`@views/${component}`);
        if (this._props) {
          this.components[name] = {
            props: props,
            template: this.components[name]
          };
          this.props[name] = true;
        }
      });
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
    this.name = _.camelCase(`${prefix}${path}`);
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setAlias(alias) {
    this.alias = alias;
  }
}
