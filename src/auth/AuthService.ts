import {inject, injectable} from "inversify";
import AuthServiceInterface from "./AuthServiceInterface";
import ConfigInterface from "../config/ConfigInterface";
import HttpServiceInterface from "../http/HttpServiceInterface";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import AuthStore from "varie/lib/auth/AuthStore";
import defaultconfig from "./config";

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

        this.axios = axios;
        this.config = Object.assign(defaultconfig, config.get("auth"))
        this.guard(this.config.defaults.guard);
        this.store = storeService.getStore().state.auth;
    }

    public fetchUser(guard?: string) {
        return new Promise((resolve, reject) => {
            let _data = this.getData(guard);
            let _guard = this.getGuard();
            let token = _data.token[_guard.accessTokenName];
            let tokenType = _guard.tokenType;
            let tokenName = _guard.tokenName;
            let object = {};
            object[tokenName] = token;

            let headers = Object.assign({
                'Authorization': tokenType+ ' ' + token
            }, this.getGuard().headers);

            this.fetch('user', object, headers)
                .then(response => {
                    this.setUser(response.data);

                    resolve(response);

                    return response.data;
                })
        });
    }

    public user(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.store[this.getGuardName()].user;
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
        this._guard = this.config.guards[guard];

        if (!this._guard) {
            throw "Guard '" + guard + "' not exist";
        }

        return this;
    }

    public loggedIn(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.store[this.getGuardName()].loggedIn
    }

    public setUser(user: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.store[this.getGuardName()].user = user;

        return this;
    }

    public setLoggedIn(value: boolean, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.store[this.getGuardName()].loggedIn = value;

        return this;
    }

    public login(data: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return new Promise((resolve, reject) => {
            let headers = Object.assign({}, this.getGuard().headers)

            this.fetch('login', data)
                .then(response => {
                    this.setData({token: response.data});
                    this.setLoggedIn(true);
                    
                    this.fetchUser()
                        .then(response => {
                            resolve(response);
                        })
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
            let token = _data.token[_guard.accessTokenName];
            let tokenType = _guard.tokenType;
            let tokenName = _guard.tokenName;
            let object = {};
            object[tokenName] = token;

            let headers = Object.assign({
                'Authorization': tokenType+ ' ' + token
            }, this.getGuard().headers);

            this.fetch('logout', Object.assign(object, data), headers)
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

                    if (this.getEndpoint('register').autoLogin)
                    {
                        this.setData({token: response.data});
                    }

                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }


    public getEndpoint(endpoint: string, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        try {
            return this.getGuard().endpoints[endpoint];
        } catch (e) {
            console.error("Endpoint '" + endpoint + "' not found");

            return null;
        }
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
        let store  = Object.assign(this.getData() || {}, data)

        localStorage.setItem(this.getStorageName(), JSON.stringify(store));

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

    protected fetch(endpoint: string, data: object = {}, headers: object = {}) {
        let _endpoint = this.getEndpoint(endpoint);

        if (!_endpoint) {
            return Promise.reject();
        }

        if (_endpoint.method == "get" || _endpoint.method == "head" || _endpoint.method == "options") {
            return this.axios[_endpoint.method](_endpoint.url, {
                params: data,
                headers: headers
            })
        } else {
            return this.axios[_endpoint.method](_endpoint.url, data, {
                headers: headers
            })
        }
    }

    public getGuard() {
        return this._guard;
    }

    public getGuardName() {
        return this._guardName;
    }

    protected getStorageName(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return "auth." + this.getGuardName()
    }
}