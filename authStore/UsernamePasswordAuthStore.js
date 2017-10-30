"use strict";
var querystring = require('querystring');
var https = require('https');
var UsernamePasswordAuthStore = /** @class */ (function () {
    function UsernamePasswordAuthStore(config) {
        this.config = config;
    }
    UsernamePasswordAuthStore.prototype.getToken = function () {
        var url = new URL(this.config.endpoint);
        // Build the post string from an object
        var post_data = querystring.stringify({
            _username: this.config.username,
            _password: this.config.password
        });
        // An object of options to indicate where to post to
        var post_options = {
            host: url.hostname,
            port: '443',
            path: url.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(post_data)
            }
        };
        var output = '';
        // Set up the request
        var post_req = https.request(post_options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                output += chunk;
            });
        });
        // post the data
        post_req.write(post_data);
        post_req.end();
        return output;
    };
    return UsernamePasswordAuthStore;
}());
