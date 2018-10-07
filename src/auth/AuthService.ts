import {inject, injectable} from "inversify";
import AuthServiceInterface from "./AuthServiceInterface";
import ConfigInterface from "../config/ConfigInterface";
import HttpServiceInterface from "../http/HttpServiceInterface";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import AuthStore from "varie/lib/auth/AuthStore";

@injectable()
export default class AuthService implements AuthServiceInterface {
    protected config;
    protected axios;
    protected _guard;
    protected _guardName;
    protected store;

    constructor(
        @inject("ConfigService") config: ConfigInterface,
        @inject("HttpService") axios: HttpServiceInterface,
        @inject("StoreService") storeService: StateServiceInterface) {

        storeService.registerStore(AuthStore);
        this.config = config;
        this.axios = axios;
        this.guard(config.get("auth.defaults.guard"));
        this.store = storeService.getStore().state.auth;
    }

    public user(guard?: string) {
        let data = this.getData(guard);

        if (data instanceof Object === false) {
            return null;
        }

        return data.user || null;
    }

    public check(guard?: string) {
        let data = this.getData(guard);

        if (data instanceof Object === false) {
            this.setLoggedIn(false);

            return this.loggedIn();
        }

        try {
            if (new Date(data.token.expiresAt).getTime() < new Date().getTime()) {
                this.setLoggedIn(false);

                return this.loggedIn();
            }

            this.setLoggedIn(true);

            return this.loggedIn();
        } catch (e) {
            this.setLoggedIn(false);

            return this.loggedIn();
        }
    }

    public guard(guard: string) {
        this._guardName = guard;
        this._guard = this.config.get("auth.guards." + guard);

        if (!this._guard) {
            console.error("Guard '" + guard + "' not exist");
        }

        return this;
    }

    public loggedIn(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.store[this.getGuardName()].loggedIn
    }

    public setLoggedIn(value: boolean, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.store[this.getGuardName()].loggedIn = value;

        return this;
    }

    public getGuard() {
        return this._guard;
    }

    public getGuardName() {
        return this._guardName;
    }

    public login(data: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return new Promise((resolve, reject) => {
            this.fetch('login', data)
                .then(response => {
                    this.setData(response.data);
                    this.setLoggedIn(true);
                    resolve(response);
                })
                .catch(error => {
                    this.removeData();
                    reject(error);
                })
        });
    }

    public logout(data: object = {}, guard?: string) {
        return new Promise((resolve, reject) => {
            let _data = this.getData(guard);
            let _guard = this.getGuard();
            let token = {};
            token[_guard.tokenName] = _data.token[_guard.accessTokenName];

            this.fetch('logout', Object.assign(token, data))
                .then(response => {
                    this.removeData();
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    public register(data: object, guard?: string) {
        return new Promise((resolve, reject) => {
            this.fetch('register', data)
                .then(response => {
                    this.removeData(guard);
                    resolve(response);
                    this.setData(response.data)
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    public getData(guard?: string) {
        try {
            if (guard) {
                this.guard(guard);
            }

            let storage = localStorage.getItem(this.getStorageName()) || '';

            return JSON.parse(storage);
        } catch (e) {
            return null;
        }
    }

    public setData(data: object) {
        localStorage.setItem(this.getStorageName(), JSON.stringify({
            token: data
        }));

        return this;
    }

    public removeData(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        localStorage.removeItem(this.getStorageName());
        this.setLoggedIn(false);

        return this;
    }

    protected fetch(endpoint: string, data: object = {}) {
        let login;

        try {
            login = this.getGuard().endpoints[endpoint];

        } catch (e) {
            console.error("Endpoint '" + endpoint + "' not found")

            return Promise.reject();
        }

        if (login.method == "get" || login.method == "head" || login.method == "options") {
            return this.axios[login.method](login.url, {
                params: data
            })
        } else {
            return this.axios[login.method](login.url, data)
        }
    }

    protected getStorageName(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return "auth." + this.getGuardName()
    }
}