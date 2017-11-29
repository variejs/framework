import { injectable } from "inversify";
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
    let value = path.split(".").reduce(function(prev: object, curr: string) {
      return prev ? prev[curr] : undefined;
    }, this._configs);

    return value !== undefined ? value : defaultValue;
  }

  set(path: string, value: any) {
    let parts = path.split(".");
    return parts.reduce(function(prev: object, curr: string, ix: number) {
      return ix + 1 == parts.length
        ? (prev[curr] = value)
        : (prev[curr] = prev[curr] || {});
    }, this._configs);
  }
}
