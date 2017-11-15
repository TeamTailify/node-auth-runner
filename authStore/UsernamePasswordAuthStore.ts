var rp = require('request-promise');

import UsernamePasswordAuthConfig = require('./../config/UsernamePasswordAuthConfig');

export class UsernamePasswordAuthStore {

    private config: UsernamePasswordAuthConfig.UsernamePasswordAuthConfig;

    constructor(config: UsernamePasswordAuthConfig.UsernamePasswordAuthConfig) {
        this.config = config;

    }

    getToken() {

        var options = {
            method: 'POST',
            uri: this.config.endpoint,
            form: {
                _username: this.config.username,
                _password: this.config.password
            }
        };

        var resp = rp(options)
            .then(function (body: any) {
                return body;
            })
            .catch(function (err: any) {
                console.log('error', err);
            });

        return resp;

    }

}