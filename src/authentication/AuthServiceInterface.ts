export default interface AuthServiceInterface {
  login(email, password);
  refresh();
  logout();
  register(name, email, password, confirmPassword);
  forgotPasswordRequest(email);
  resetPassword(token, email, password, confirmPassword);
  getUser(): Promise<any>;
  getGuardConfig(config: string);
  isLoggedIn() : Promise<any>;
}
