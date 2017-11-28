import ConfigInterface from "./ConfigInterface";
export default class Config implements ConfigInterface {
    _configs: {};
    constructor();
    get(key: any, defaultValue?: any): any;
    set(key: any, value: any): {};
}
