class AuthRunner {

    private usernamePasswordStore: UsernamePasswordAuthStore;
    private inMemoryStore: InMemoryAuthStore;

    constructor(usernamePasswordStore: UsernamePasswordAuthStore, inMemoryStore: InMemoryAuthStore) {

        this.usernamePasswordStore = usernamePasswordStore;
        this.inMemoryStore = inMemoryStore;

    }

    public getToken() {

        let token = this.inMemoryStore.getToken();

        if(token) {
            return token;
        }

        let authtoken = this.usernamePasswordStore.getToken();

        this.inMemoryStore.setToken(token);

        return token;

    }

}