import ConfigInterface from "varie/src/config/ConfigInterface";

export default class AuthServiceInterface {
    public user(guard?: string) {}
    public check(guard?: string) {}
    public guard(guard: string) {}
    public loggedIn(guard?: string) {}
    public setLoggedIn(value: boolean, guard?: string) {}
    public getGuard() {}
    public getGuardName() {}
    public login(data: object, guard?: string) {}
    public logout(data?: object, guard?: string) {}
    public register(data: object, guard?: string) {}
    public getData(guard?: string) {}
    public setData(data: object) {}
    public removeData(guard?: string) {}
}