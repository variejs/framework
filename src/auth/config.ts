export default {
    defaults: {
        guard: 'user'
    },
    user: {
        idPropertyName: 'id'
    },
    guards: {
        user: {
            driver: 'jwt',
            endpoints: {
                user: {
                    url: '/auth/me',
                    method: 'post'
                },
                login: {
                    url: '/auth/login',
                    method: 'post',
                    redirect: false
                },
                logout: {
                    url: '/auth/logout',
                    method: 'post',
                    redirect: false
                },
                register: {
                    url: '/auth/register',
                    method: 'post',
                    redirect: false,
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