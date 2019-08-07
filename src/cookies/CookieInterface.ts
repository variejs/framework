export default interface CookieInterface {
  get(name: string): any;
  set(
    name: string,
    value: any,
    days?: number,
    path?: string,
    domain?: string,
    secure?: boolean,
  );
  remove(name: string, path?: string, domain?: string);
  hasItem(name: string): boolean;
}
