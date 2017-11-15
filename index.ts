import usernamePasswordAuthConf = require('./config/UsernamePasswordAuthConfig');
import inMemoryAuthConf = require('./config/InMemoryStoreAuthConfig');
import authRunner = require('./runner/AuthRunner');
import inMemoryAuthStore = require('./authStore/InMemoryAuthStore');
import usernamePasswordAuthStore = require('./authStore/UsernamePasswordAuthStore');

exports.getToken = function (usernamePasswordConfig: usernamePasswordAuthConf.UsernamePasswordAuthConfig, inMemoryStoreConfig: inMemoryAuthConf.InMemoryStoreAuthConfig) {


    let uPassAuthStore = new usernamePasswordAuthStore.UsernamePasswordAuthStore(usernamePasswordConfig);
    let inMemAuthStore = new inMemoryAuthStore.InMemoryAuthStore(inMemoryStoreConfig);

    let runner = new authRunner.AuthRunner(uPassAuthStore, inMemAuthStore);

    return runner.getToken();


}