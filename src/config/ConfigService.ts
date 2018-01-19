import { injectable } from "inversify";
import { getByDot, setByDot } from "./../utilities";
import ConfigInterface from "./ConfigInterface";

@injectable()
export default class Config implements ConfigInterface {
  public _configs = {};

  constructor() {
    let files = require.context("@config", true, /^\.\/.*\.(ts)$/);

    for (let filename of files.keys()) {
      let configName = filename
        .replace(/^\.\//, "")
        .replace(/\/$/, "")
        .replace(/\.js/, "")
        .replace(/\.ts/, "");

      this._configs[configName] = files(filename).default;
    }
  }

  get(path: string, defaultValue: any) {
    return getByDot(this._configs, path, defaultValue);
  }

  set(path: string, value: any) {
    return setByDot(this._configs, path, value);
  }
}
