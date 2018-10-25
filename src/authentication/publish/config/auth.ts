export default {
  defaults: {
    guard: "user"
  },
  guards: {
    user: {
      driver: "JwtGuard",
      loginAfterReset: true,
      loginAfterRegister: true,
      endpoints: {
        user: "/auth/me",
        login: "/auth/login",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
        register: "/auth/register",
        resetPassword: "/auth/reset-password",
        forgotPassword: "/auth/forgot-password"
      },
      token: {
        name: "token",
        type: "bearer",
        expiresAt: "expires_at",
        accessToken: "access_token"
      }
    }
  }
};
