import ConfigInterface from "varie/src/config/ConfigInterface";

export default class AuthServiceInterface {
    public login(data: object, guard?: string) {}
    public register(data: object, guard?: string) {}
    public logout(data: object = {}, guard?: string) {}
    public user(guard?: string) {}
    public fetchUser(guard?: string) {}
    public check(guard?: string) {}
    public loggedIn(guard?: string) {}
    public guest(guard?: string) {}
    public id(guard?: string) {}
    public guard(guard: string) {}
    public getToken(guard?: string) {}
    public getStorage(guard?: string) {}
}