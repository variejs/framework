export default interface ConfigInterface {
  set(parameter: string, value: any): any;
  get(parameter: string, defaultValue?: string | null): any;
}
