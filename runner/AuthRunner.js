"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthRunner = /** @class */ (function () {
    function AuthRunner(usernamePasswordStore, inMemoryStore) {
        this.usernamePasswordStore = usernamePasswordStore;
        this.inMemoryStore = inMemoryStore;
    }
    AuthRunner.prototype.getToken = function () {
        var inMemoryStore = this.inMemoryStore;
        var token = inMemoryStore.getToken();
        if (typeof token !== "undefined") {
            token.then(function (resp) {
                if (typeof resp !== "undefined") {
                    return resp;
                }
            });
        }
        var authtoken = this.usernamePasswordStore.getToken();
        authtoken.then(function (resp) {
            var unamepasstoken = JSON.parse(resp);
            inMemoryStore.setToken(unamepasstoken.token);
        });
        return authtoken;
    };
    return AuthRunner;
}());
exports.AuthRunner = AuthRunner;
