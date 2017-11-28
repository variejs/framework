import * as _ from "lodash";
import { injectable } from "inversify";
import ConfigInterface from "./ConfigInterface";

@injectable()
export default class Config implements ConfigInterface {
  public _configs = {};

  constructor() {
    let files = require.context("@config", true, /^\.\/.*\.(ts)$/);

    _.each(files.keys(), filename => {
      let configName = filename
        .replace(/^\.\//, "")
        .replace(/\/$/, "")
        .replace(/\.js/, "")
        .replace(/\.ts/, "");

      this._configs[configName] = files(filename).default;
    });
  }

  get(key, defaultValue?) {
    return _.get(this._configs, key, defaultValue);
  }

  set(key, value) {
    return _.set(this._configs, key, value);
  }
}
