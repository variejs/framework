import { injectable } from "inversify";
import ConfigInterface from "./ConfigInterface";
import { getByDot, setByDot } from "./../utilities";

declare const __ENV_VARIABLES__: object;

@injectable()
export default class Config implements ConfigInterface {
  protected configs = __ENV_VARIABLES__;

  constructor() {
    let files = require.context("@config", true, /^\.\/.*\.(ts)$/);

    for (let filename of files.keys()) {
      let configName = filename
        .replace(/^\.\//, "")
        .replace(/\/$/, "")
        .replace(/\.js/, "")
        .replace(/\.ts/, "");

      this.configs[configName] = Object.assign(
        {},
        files(filename).default,
        this.configs[configName]
      );
    }
  }

  public get(path: string, defaultValue: any) {
    return getByDot(this.configs, path, defaultValue);
  }

  public set(path: string, value: any) {
    return setByDot(this.configs, path, value);
  }
}
