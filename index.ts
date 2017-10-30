
exports.getToken = function (usernamePasswordConfig: UsernamePasswordAuthConfig, inMemoryStoreConfig: InMemoryStoreAuthConfig) {


    let usernamePasswordAuthStore = new UsernamePasswordAuthStore(usernamePasswordConfig);
    let inMemoryAuthStore = new InMemoryAuthStore(inMemoryStoreConfig);

    let authRunner = new AuthRunner(usernamePasswordAuthStore, inMemoryAuthStore);

    return authRunner.getToken();


}