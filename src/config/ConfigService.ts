import { injectable } from "inversify";
import ConfigInterface from "./ConfigInterface";
import { getByDot, setByDot } from "./../utilities";

declare const __ENV_VARIABLES__: object;

@injectable()
export default class Config implements ConfigInterface {
  private _configs = __ENV_VARIABLES__;

  constructor() {
    let files = require.context("@config", true, /^\.\/.*\.(ts)$/);

    for (let filename of files.keys()) {
      let configName = filename
        .replace(/^\.\//, "")
        .replace(/\/$/, "")
        .replace(/\.js/, "")
        .replace(/\.ts/, "");

      this._configs[configName] = Object.assign(
        {},
        this._configs[configName],
        files(filename).default
      );
    }
  }

  get(path: string, defaultValue: any) {
    return getByDot(this._configs, path, defaultValue);
  }

  set(path: string, value: any) {
    return setByDot(this._configs, path, value);
  }
}
