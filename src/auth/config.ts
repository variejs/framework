export default {
    defaults: {
        guard: 'user'
    },
    guards: {
        user: {
            driver: 'jwt',
            endpoints: {
                user: {
                    url: '/auth/me',
                    method: 'post',
                },
                login: {
                    url: '/auth/login',
                    method: 'post'
                },
                logout: {
                    url: '/auth/logout',
                    method: 'post'
                },
                register: {
                    url: '/auth/register',
                    method: 'post',
                    autoLogin: false
                }
            },
            headers: {},
            // Request
            tokenName: 'token',
            // Response
            accessTokenName: 'access_token',
            expiresAtName: 'expires_at',
            tokenType: 'bearer'
        }
    }
};