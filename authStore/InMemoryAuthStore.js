"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cache = require('memcached-promisify');
var InMemoryAuthStore = /** @class */ (function () {
    function InMemoryAuthStore(config) {
        this.FIFTY_NINE_MINUTES = 3540;
        this.config = config;
    }
    InMemoryAuthStore.prototype.getToken = function () {
        var client = new Cache(this.config.endpoint + ':' + this.config.port);
        return client.get(this.config.cacheKey);
    };
    InMemoryAuthStore.prototype.setToken = function (token) {
        var client = new Cache(this.config.endpoint + ':' + this.config.port);
        client.set(this.config.cacheKey, token, this.FIFTY_NINE_MINUTES);
    };
    return InMemoryAuthStore;
}());
exports.InMemoryAuthStore = InMemoryAuthStore;
