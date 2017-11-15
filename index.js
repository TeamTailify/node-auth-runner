"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authRunner = require("./runner/AuthRunner");
var inMemoryAuthStore = require("./authStore/InMemoryAuthStore");
var usernamePasswordAuthStore = require("./authStore/UsernamePasswordAuthStore");
exports.getToken = function (usernamePasswordConfig, inMemoryStoreConfig) {
    var uPassAuthStore = new usernamePasswordAuthStore.UsernamePasswordAuthStore(usernamePasswordConfig);
    var inMemAuthStore = new inMemoryAuthStore.InMemoryAuthStore(inMemoryStoreConfig);
    var runner = new authRunner.AuthRunner(uPassAuthStore, inMemAuthStore);
    return runner.getToken();
};
