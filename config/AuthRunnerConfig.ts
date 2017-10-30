
class AuthRunnerConfig {

    private usernamePasswordConfig: UsernamePasswordAuthConfig;
    private inMemoryStoreConfig: InMemoryStoreAuthConfig;

    constructor(usernamePasswordConfig: UsernamePasswordAuthConfig, inMemoryStoreConfig: InMemoryStoreAuthConfig) {

        this.usernamePasswordConfig = usernamePasswordConfig;
        this.inMemoryStoreConfig = inMemoryStoreConfig;

    }

}