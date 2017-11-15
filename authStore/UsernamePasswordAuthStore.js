"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rp = require('request-promise');
var UsernamePasswordAuthStore = /** @class */ (function () {
    function UsernamePasswordAuthStore(config) {
        this.config = config;
    }
    UsernamePasswordAuthStore.prototype.getToken = function () {
        var options = {
            method: 'POST',
            uri: this.config.endpoint,
            form: {
                _username: this.config.username,
                _password: this.config.password
            }
        };
        var resp = rp(options)
            .then(function (body) {
            return body;
        })
            .catch(function (err) {
            console.log('error', err);
        });
        return resp;
    };
    return UsernamePasswordAuthStore;
}());
exports.UsernamePasswordAuthStore = UsernamePasswordAuthStore;
