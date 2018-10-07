import ConfigInterface from "varie/src/config/ConfigInterface";

export default class AuthServiceInterface {
    public user(guard?: string) {}

    public check(guard?: string) {}

    public guard(guard?: string) {}

    public login(credentials: object, guard?: string) {}

    public logout(params?: object, guard?: string) {}

    public getData(guard?: string) {}
}