export default interface StorageServiceInterface {
  get(key: string): any;
  set(key: string, value: any): void;
  remove(key: string): void;
}
