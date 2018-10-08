import {inject, injectable} from "inversify";
import AuthServiceInterface from "varie/src/auth/AuthServiceInterface";
import ConfigInterface from "varie/src/config/ConfigInterface";
import HttpServiceInterface from "varie/src/http/HttpServiceInterface";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import AuthStore from "varie/lib/auth/AuthStore";
import defaultconfig from "varie/src/auth/config";

@injectable()
export default class AuthService implements AuthServiceInterface {
    protected config;
    protected axios;
    protected authConfig;
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
        this.authConfig = Object.assign(defaultconfig, config.get("auth"))
        this.guard(this.authConfig.defaults.guard);
        this.store = storeService.getStore().state.auth;
        this.boot();
    }

    protected boot() {
        this.check();
        this.user();
    }

    public login(data: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return new Promise((resolve, reject) => {
            let headers = Object.assign({}, this.getGuard().headers)

            this.fetch('login', data)
                .then(loginResponse => {
                    this.setStorage({token: loginResponse.data});
                    this.setLoggedIn(true);

                    this.fetchUser()
                        .then(response => {
                            resolve({loginResponse, response});
                        })
                })
                .catch(error => {
                    this.removeStorage();
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
                        this.setStorage({token: response.data});
                    }

                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    public logout(data: object = {}, guard?: string) {
        return new Promise((resolve, reject) => {
            let storage = this.getStorage(guard);
            let _guard = this.getGuard();
            let token = storage.token[_guard.accessTokenName];
            let tokenType = _guard.tokenType;
            let tokenName = _guard.tokenName;
            let object = {};
            object[tokenName] = token;

            let headers = Object.assign({
                'Authorization': tokenType+ ' ' + token
            }, this.getGuard().headers);

            this.fetch('logout', Object.assign(object, data), headers)
                .then(response => {
                    this.removeStorage();
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    public user(guard?: string) {
        if (guard) {
            this.guard(guard);
        }
        
        return this.getUser();
    }

    public fetchUser(guard?: string) {
        return new Promise((resolve, reject) => {
            let storage = this.getStorage(guard);
            let _guard = this.getGuard();
            let token = storage.token[_guard.accessTokenName];
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

    public check(guard?: string) {
        let storage = this.getStorage(guard);

        if (storage instanceof Object === false) {
            this.setLoggedIn(false);

            return this.loggedIn();
        }

        try {
            if (new Date(storage.token.expiresAt).getTime() < new Date().getTime()) {
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

    public loggedIn(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.store[this.getGuardName()].loggedIn
    }

    public guest(guard?: string) {
        return ! this.user(guard);
    }

    public id(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.store[this.getGuardName()].user[this.authConfig.user.idPropertyName];
    }

    public guard(guard: string) {
        this._guardName = guard;
        this._guard = this.authConfig.guards[guard];

        if (!this._guard) {
            throw "Guard '" + guard + "' not exist";
        }

        return this;
    }
    
    public getToken(guard?: string) {
        return this.getStorage(guard).token[this.getGuard().accessTokenName];
    }

    public getStorage(guard?: string) {
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

    protected setUser(user: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.setStorage({user})

        this.store[this.getGuardName()].user = user;

        return this;
    }
    
    protected getUser(guard?: string) {
        if (guard) {
            this.guard(guard);
        }
        
        let storage = this.getStorage();

        if (storage instanceof Object && storage.hasOwnProperty('user')) {
            this.setUser(storage.user);

            return this.store[this.getGuardName()].user;
        }
        
        return null;
    }

    protected setLoggedIn(value: boolean, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.store[this.getGuardName()].loggedIn = value;

        return this;
    }

    protected getEndpoint(endpoint: string, guard?: string) {
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

    protected setStorage(data: object) {
        let storage  = Object.assign(this.getStorage() || {}, data)

        localStorage.setItem(this.getStorageName(), JSON.stringify(storage));

        return this;
    }

    protected removeStorage(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        localStorage.removeItem(this.getStorageName());
        this.setLoggedIn(false);

        return this;
    }

    protected getGuard() {
        return this._guard;
    }

    protected getGuardName() {
        return this._guardName;
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

    protected getStorageName(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return "auth." + this.getGuardName()
    }
}