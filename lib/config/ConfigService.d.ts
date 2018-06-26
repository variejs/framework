import ConfigInterface from "./ConfigInterface";
export default class Config implements ConfigInterface {
    _configs: {};
    constructor();
    get(path: string, defaultValue: any): any;
    set(path: string, value: any): any;
}
