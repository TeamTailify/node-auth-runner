"use strict";
var Memcached = require('memcached');
var InMemoryAuthStore = /** @class */ (function () {
    function InMemoryAuthStore(config) {
        this.FIFTY_NINE_MINUTES = 3540;
        this.config = config;
    }
    InMemoryAuthStore.prototype.getToken = function () {
        var client = new Memcached(this.config.endpoint + ':' + this.config.port);
        return client.get(this.config.cacheKey, function (err, data) {
            if (err) {
                return null;
            }
            return data.toString();
        });
    };
    InMemoryAuthStore.prototype.setToken = function (token) {
        var client = new Memcached(this.config.endpoint + ':' + this.config.port);
        client.set(this.config.cacheKey, token, this.FIFTY_NINE_MINUTES);
    };
    return InMemoryAuthStore;
}());
