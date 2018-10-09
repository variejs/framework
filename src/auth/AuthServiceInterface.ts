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
    getStorage(guard?: string): void;
    getHeaders(guard?: string): void;
}