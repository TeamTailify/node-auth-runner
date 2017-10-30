let Memcached = require('memcached');

class InMemoryAuthStore {

    private FIFTY_NINE_MINUTES = 3540;

    private config: InMemoryStoreAuthConfig;

    constructor(config: InMemoryStoreAuthConfig) {
        this.config = config;
    }

    getToken() {

        let client = new Memcached(this.config.endpoint + ':' + this.config.port);

        return client.get(this.config.cacheKey, function (err: any, data: object) {

            if(err) {
                return null;
            }

            return data.toString();
        });

    }

    setToken(token: string) {

        let client = new Memcached(this.config.endpoint + ':' + this.config.port);

        client.set(this.config.cacheKey, token, this.FIFTY_NINE_MINUTES);

    }

}