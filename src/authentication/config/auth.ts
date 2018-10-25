import JwtGuard from 'varie/lib/authentication/guards/JwtGuard'

export default {
  defaults: {
    guard: "user",
  },
  guards: {
    user: {
      driver: JwtGuard,
      endpoints: {
        user: "/auth/me",
        login: "/auth/login",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
        register: "/auth/register",
        resetPassword: "/auth/reset-password",
        forgotPassword: "/auth/forgot-password",
      },
      tokenName: "token",
      tokenType: "bearer",
      expiresAtName: "expires_at",
      accessTokenName: "access_token",
    },
  },
};
