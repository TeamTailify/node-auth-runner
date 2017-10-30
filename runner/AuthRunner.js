"use strict";
var AuthRunner = /** @class */ (function () {
    function AuthRunner(usernamePasswordStore, inMemoryStore) {
        this.usernamePasswordStore = usernamePasswordStore;
        this.inMemoryStore = inMemoryStore;
    }
    AuthRunner.prototype.getToken = function () {
        var token = this.inMemoryStore.getToken();
        if (token) {
            return token;
        }
        var authtoken = this.usernamePasswordStore.getToken();
        this.inMemoryStore.setToken(token);
        return token;
    };
    return AuthRunner;
}());
