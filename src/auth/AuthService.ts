import {inject, injectable} from "inversify";
import AuthServiceInterface from "./AuthServiceInterface";
import ConfigInterface from "varie/src/config/ConfigInterface";
import HttpServiceInterface from "varie/src/http/HttpServiceInterface";
import StateServiceInterface from "varie/src/state/StateServiceInterface";
import AuthStore from "./AuthStore";
import AuthAppMiddleware from "./AuthAppMiddleware";
import VueRouterService from "../routing/VueRouterService";

@injectable()
export default class AuthService implements AuthServiceInterface {
    protected configService;
    protected httpService;
    protected storeService;
    protected routerService;
    protected _guard;
    protected _guardName;
    protected authStore;
    protected listeners = {
        error: <any>[],
        unauthorized: <any>[]
    };

    constructor(
        @inject("ConfigService") configService: ConfigInterface,
        @inject("HttpService") httpService: HttpServiceInterface,
        @inject("StoreService") storeService: StateServiceInterface,
        @inject("RouterService") routerService: VueRouterService)
    {
        this.configService = configService;
        this.httpService = httpService;
        this.storeService = storeService;
        this.routerService = routerService;
        this.guard(this.authConfig('defaults.guard'));
        storeService.registerStore(AuthStore);
        this.authStore = storeService.getStore().state.auth;
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

                            this.redirect(this.getEndpoint('login.redirect'));
                        })
                        .catch(error => {
                            this.callListener('error', error, this.getGuardFromError(error));
                        })
                })
                .catch(error => {
                    this.callListener('error', error, this.getGuardFromError(error));
                    reject(error);
                })
        });
    }

    public register(data: object, guard?: string) {
        return this.fetch('register', data)
            .then(response => {
                if (this.getEndpoint('register.autoLogin')) {
                    this.setStorage({token: response.data});
                }

                this.redirect(this.getEndpoint('register.redirect'));
            })
            .catch(error => {
                this.callListener('error', error, this.getGuardFromError(error));
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
        if (guard) {
            this.guard(guard);
        }

        let storage = this.getStorage();

        if (storage instanceof Object === false) {
            this.setLoggedIn(false);
        } else {
            try {
                if (new Date(storage.token[this.getGuard('expiresAtName')]).getTime() < new Date().getTime()) {
                    this.setLoggedIn(false)
                    this.removeStorage();
                } else {
                    this.setLoggedIn(true);
                }
            } catch (e) {
                this.setLoggedIn(false);
            }
        }

        return this.loggedIn();
    }

    public async refresh() {

        let refresh = await this.fetch('refresh')

        return refresh;
    }

    public loggedIn(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.authStore[this.getGuardName()].loggedIn
    }

    public guest(guard?: string) {
        return ! this.user(guard);
    }

    public id(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.authStore[this.getGuardName()].user[this.getGuard('idName')];
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
        if (guard) {
            this.guard(guard);
        }

        return this.getStorage().token[this.getGuard().accessTokenName];
    }

    public getStorage(json: boolean = true, guard?: string) {
        try {
            if (guard) {
                this.guard(guard);
            }

            let storage = localStorage.getItem(this.getStorageName()) || '';

            if (! json) {
                return storage;
            }

            return JSON.parse(storage);
        } catch (e) {
            return null;
        }
    }

    public getHeaders(guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return {
            'Authorization': this.getGuard('tokenType')+ ' ' + this.getStorage().token[this.getGuard('accessTokenName')]
        };
    }

    public authConfig(path: string = '') {
        return this.configService.get(path ? 'auth.'+path : 'auth');
    }

    public onError(listener) {
        return this.addListener('error', listener);
    }

    public onUnauthorized(listener) {
        return this.addListener('unauthorized', listener);
    }

    public callListener(type, error, guard) {
        for (let listener of this.listeners[type]) {
            try {
                listener(error, guard);
            } catch (e) {}
        }
    }

    public redirect(redirect: object|string|boolean) {
        if (!redirect) {
            return false;
        }

        this.routerService.push(redirect);

        return this;
    }

    public getGuardFromError(error) {
        return error.config && error.config.guard ? error.config.guard : null;
    }

    protected addListener(type, listener) {
        this.listeners[type].push(listener);

        return this;
    }

    protected setUser(user: object, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.setStorage({user})

        this.authStore[this.getGuardName()].user = user;

        return this;
    }
    
    protected getUser(guard?: string) {
        if (guard) {
            this.guard(guard);
        }
        
        let storage = this.getStorage();

        if (storage instanceof Object && storage.hasOwnProperty('user')) {
            this.setUser(storage.user);

            return this.authStore[this.getGuardName()].user;
        }
        
        return null;
    }

    protected setLoggedIn(value: boolean, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        this.authStore[this.getGuardName()].loggedIn = value;

        return this;
    }

    protected getEndpoint(endpoint: string, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        let _endpoint = this.authConfig(`guards.${this.getGuardName()}.endpoints.${endpoint}`)

        if (_endpoint !== undefined) {
            return _endpoint;
        }

        throw "Endpoint '" + endpoint + "' not found";
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
        if (guard) {
            this.guard(guard);
        }

        return this.getStorage();
    }

    protected getGuard(config?: string|boolean, guard?: string) {
        if (guard) {
            this.guard(guard);
        }

        return this.authConfig(`guards.${this.getGuardName()}${config ? '.'+config : ''}`);
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
                headers: headers,
                guard: this.getGuardName()
            })
        } else {
            return this.httpService[_endpoint.method](_endpoint.url, data, {
                headers: headers,
                guard: this.getGuardName()
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