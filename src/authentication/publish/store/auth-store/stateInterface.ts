export interface AuthState {
  user: Object;
  authAreaData: {
    name: String;
    email: String;
    password: String;
    confirm_password: String;
  };
}
