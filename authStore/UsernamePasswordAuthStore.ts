let querystring = require('querystring');
let https = require('https');

class UsernamePasswordAuthStore {

    private config: UsernamePasswordAuthConfig;

    constructor(config: UsernamePasswordAuthConfig) {
        this.config = config;

    }

    getToken() {

        let url = new URL(this.config.endpoint);

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

        let output = '';
        // Set up the request
        var post_req = https.request(post_options, function(res: any) {
            res.setEncoding('utf8');
            res.on('data', function (chunk: any) {
                output += chunk;
            });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();

        return output;

    }

}