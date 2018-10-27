import { injectable } from "inversify";
import StorageServiceInterface from "./StorageServiceInterface";

@injectable()
export default class StorageService implements StorageServiceInterface {
  get(key: string): any {
    return localStorage.getItem(key);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  remove(key): void {
    localStorage.removeItem(key);
  }
}
