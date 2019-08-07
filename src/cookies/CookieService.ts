import { injectable } from "inversify";
import CookieInterface from "./CookieInterface";

// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework

@injectable()
export default class CookieService implements CookieInterface {
  public get(name: string) {
    if (!name) {
      return null;
    }
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            "(?:(?:^|.*;)\\s*" +
              encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") +
              "\\s*\\=\\s*([^;]*).*$)|^.*$",
          ),
          "$1",
        ),
      ) || null
    );
  }

  public set(
    name: string,
    value: any,
    days: number = 1,
    path: string = "/",
    domain?: string,
    secure?: boolean,
  ) {
    let expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
      return false;
    }
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value,
    )}; expires=${expires.toUTCString()}${domain ? "; domain=" + domain : ""}${
      path ? "; path=" + path : ""
    }${secure ? "; secure" : ""}`;
  }

  public remove(name: string, path?: string, domain?: string) {
    if (!this.hasItem(name)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(name) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
      (domain ? "; domain=" + domain : "") +
      (path ? "; path=" + path : "");
  }

  public hasItem(name: string) {
    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
      return false;
    }
    return new RegExp(
      "(?:^|;\\s*)" +
        encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") +
        "\\s*\\=",
    ).test(document.cookie);
  }
}
