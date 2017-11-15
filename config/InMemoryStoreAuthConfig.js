"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryStoreAuthConfig = /** @class */ (function () {
    function InMemoryStoreAuthConfig(parameters) {
        this._endpoint = parameters.endpoint;
        this._port = parameters.port;
        this._cacheKey = parameters.cacheKey;
    }
    Object.defineProperty(InMemoryStoreAuthConfig.prototype, "endpoint", {
        get: function () {
            return this._endpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InMemoryStoreAuthConfig.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InMemoryStoreAuthConfig.prototype, "cacheKey", {
        get: function () {
            return this._cacheKey;
        },
        enumerable: true,
        configurable: true
    });
    return InMemoryStoreAuthConfig;
}());
exports.InMemoryStoreAuthConfig = InMemoryStoreAuthConfig;
