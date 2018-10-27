export default interface AuthServiceInterface {
  login(email: string, password: string);
  refresh();
  logout();
  register(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  );
  forgotPasswordRequest(email: string);
  resetPassword(
    token: string,
    email: string,
    password: string,
    confirmPassword: string
  );
  getUser(): Promise<any>;
  getGuardConfig(config: string);
  isLoggedIn(): Promise<boolean>;
}
