export default interface AuthServiceInterface {
    login(data: object, guard?: string): void;
    register(data: object, guard?: string): void;
    logout(data?: object, guard?: string): void;
    user(guard?: string): void;
    fetchUser(guard?: string): void;
    check(guard?: string): void;
    loggedIn(guard?: string): void;
    guest(guard?: string): void;
    id(guard?: string): void;
    guard(guard: string): void;
    getToken(guard?: string): void;
    getStorage(json?: boolean, guard?: string): void;
    getHeaders(guard?: string): void;
    authConfig(path?: string): void;
    onError(listener) : void;
    onUnauthorized(listener) : void;
    callListener(type, error, guard) : void;
    redirect(redirect: object|string|boolean) : void;
    getGuardFromError(error) : void;
}
