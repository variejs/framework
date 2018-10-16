export default {
  defaults: {
    guard: "user"
  },
  guards: {
    user: {
      driver: "JWT", // or basic
      endpoints: {
        user: "/auth/me",
        login: "/auth/login",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
        register: "/auth/register"
      },
      tokenName: "token",
      tokenType: "bearer",
      expiresAtName: "expires_at",
      accessTokenName: "access_token"
    }
  }
};
