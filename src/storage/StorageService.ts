import { injectable } from "inversify";
import StorageServiceInterface from "./StorageServiceInterface";

@injectable()
export default class StorageService implements StorageServiceInterface {
  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public remove(key): void {
    localStorage.removeItem(key);
  }
}
