const Cache = require('memcached-promisify');

import InMemoryStoreAuthConfig = require('./../config/InMemoryStoreAuthConfig');

export class InMemoryAuthStore {

    private FIFTY_NINE_MINUTES = 3540;

    private config: InMemoryStoreAuthConfig.InMemoryStoreAuthConfig;

    constructor(config: InMemoryStoreAuthConfig.InMemoryStoreAuthConfig) {
        this.config = config;
    }

    getToken() {

        let client = new Cache(this.config.endpoint + ':' + this.config.port);

        return client.get(this.config.cacheKey);

    }

    setToken(token: string) {

        let client = new Cache(this.config.endpoint + ':' + this.config.port);

        client.set(this.config.cacheKey, token, this.FIFTY_NINE_MINUTES);

    }

}