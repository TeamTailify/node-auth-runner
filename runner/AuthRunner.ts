import UsernamePasswordAuthStore = require('./../authStore/UsernamePasswordAuthStore');
import InMemoryAuthStore = require('./../authStore/InMemoryAuthStore');


export class AuthRunner {

    private usernamePasswordStore: UsernamePasswordAuthStore.UsernamePasswordAuthStore;
    private inMemoryStore: InMemoryAuthStore.InMemoryAuthStore;

    constructor(usernamePasswordStore: UsernamePasswordAuthStore.UsernamePasswordAuthStore, inMemoryStore: InMemoryAuthStore.InMemoryAuthStore) {

        this.usernamePasswordStore = usernamePasswordStore;
        this.inMemoryStore = inMemoryStore;

    }

    public getToken() {

        let inMemoryStore = this.inMemoryStore;

        let token = inMemoryStore.getToken();

        if(typeof token !== "undefined") {

            token.then(function (resp: any) {

                if(typeof resp !== "undefined") {
                    return resp;
                }


            });

        }

        let authtoken = this.usernamePasswordStore.getToken();

        authtoken.then(function (resp: any) {

            var unamepasstoken = JSON.parse(resp);

            inMemoryStore.setToken(unamepasstoken.token);
        });

        return authtoken;


    }

}