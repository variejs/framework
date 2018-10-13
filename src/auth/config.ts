export default {
    defaults: {
        guard: 'user'
    },
    guards: {
        user: {
            driver: 'jwt',
            endpoints: {
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
                },
                user: {
                    url: '/auth/me',
                    method: 'post'
                },
                refresh: {
                    url: '/auth/refresh',
                    method: 'post'
                }
            },
            headers: {},
            // Request
            tokenName: 'token',
            // Response
            accessTokenName: 'access_token',
            expiresAtName: 'expires_at',
            tokenType: 'bearer',
            idName: 'id'
        }
    }
};