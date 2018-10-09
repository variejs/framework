import {inject, injectable} from "inversify";
import AuthServiceInterface from "./AuthServiceInterface";
import ConfigInterface from "varie/src/config/ConfigInterface";
import HttpServiceInterface from "varie/src/http/HttpServiceInterface";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import AuthStore from "./AuthStore";
import AuthAppMiddleware from "./AuthAppMiddleware";

@injectable()
export default class AuthService implements AuthServiceInterface {
    protected configService;
    protected httpService;
    protected storeService;
    protected _guard;
    protected _guardName;
    protected store;
    protected listeners = <any>[];

    constructor(
        @inject("ConfigService") configService: ConfigInterface,
        @inject("HttpService") httpService: HttpServiceInterface,
        @inject("StoreService") storeService: StateServiceInterface) 
    {
        this.configService = configService;
        this.httpService = httpService;
        this.storeService = storeService;
        this.guard(this.authConfig('defaults.guard'));
        storeService.registerStore(AuthStore);
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
            this.fetch('login', data, {headers: this.getGuard().headers})
                .then(loginResponse => {
                    this.setStorage({token: loginResponse.data});
                    this.fetchUser()
                        .then(userResponse => {
                            this.setLoggedIn(true);

                            resolve({loginResponse, userResponse});
                        })
                        .catch(error => {
                            this.callListeners(error, 'user');
                        })
                })
                .catch(error => {
                    this.removeStorage();
                    this.callListeners(error, 'login');
                    reject(error);
                })
        });
    }

    public register(data: object, guard?: string) {
        return this.fetch('register', data)
            .then(response => {
                if (this.getEndpoint('register').autoLogin) {
                    this.setStorage({token: response.data});
                }
            })
            .catch(error => {
                this.callListeners(error, 'register');
            })
    }

    public logout(data: object = {}, guard?: string) {
        return this.fetch('logout', data, this.getGuard().headers)
            .then(response => {
                this.removeStorage();
            })
    }

    public user(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.getUser();
    }

    public fetchUser(guard?: string) {
        return new Promise((resolve, reject) => {
            this.fetch('user', {}, this.getGuard().headers)
                .then(response => {
                    this.setUser(response.data);

                    resolve(response);
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

        return this.store[this.getGuardName()].user[this.authConfig('user.idPropertyName')];
    }

    public guard(guard: string) {
        this._guardName = guard;
        this._guard = this.authConfig(`guards.${guard}`);

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

    public getHeaders(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        let storage = this.getStorage();
        let _guard = this.getGuard();
        let token = storage.token[_guard.accessTokenName];
        let tokenType = _guard.tokenType;

        return {
            'Authorization': tokenType+ ' ' + token
        };
    }

    public onError(listener) {
        this.listeners.push(listener);

        return this;
    }

    protected callListeners(error, endpoint) {
        for (let listener of this.listeners) {
            try {
                listener(error, this.getGuardName(), endpoint);
            } catch (e) {}
        }
    }

    protected authConfig(path: string = '') {
        return this.configService.get(path ? 'auth.'+path : 'auth');
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
            throw "Endpoint '" + endpoint + "' not found";

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

    protected hasStorage(guard?: string) {
        return this.getStorage(guard) instanceof Object;
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
            return this.httpService[_endpoint.method](_endpoint.url, {
                params: data,
                headers: headers
            })
        } else {
            return this.httpService[_endpoint.method](_endpoint.url, data, {
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