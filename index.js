"use strict";
exports.getToken = function (usernamePasswordConfig, inMemoryStoreConfig) {
    var usernamePasswordAuthStore = new UsernamePasswordAuthStore(usernamePasswordConfig);
    var inMemoryAuthStore = new InMemoryAuthStore(inMemoryStoreConfig);
    var authRunner = new AuthRunner(usernamePasswordAuthStore, inMemoryAuthStore);
    return authRunner.getToken();
};
