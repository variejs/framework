export default interface ConfigInterface {
  get(parameter: string, defaultValue?: string | null): any;
  set(parameter: string, value: any): any;
};
