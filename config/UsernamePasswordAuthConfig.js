"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsernamePasswordAuthConfig = /** @class */ (function () {
    function UsernamePasswordAuthConfig(parameters) {
        this._username = parameters.username;
        this._password = parameters.password;
        this._endpoint = parameters.endpoint;
    }
    Object.defineProperty(UsernamePasswordAuthConfig.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsernamePasswordAuthConfig.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsernamePasswordAuthConfig.prototype, "endpoint", {
        get: function () {
            return this._endpoint;
        },
        enumerable: true,
        configurable: true
    });
    return UsernamePasswordAuthConfig;
}());
exports.UsernamePasswordAuthConfig = UsernamePasswordAuthConfig;
