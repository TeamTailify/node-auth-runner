
class UsernamePasswordAuthConfig {
    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    get endpoint(): string {
        return this._endpoint;
    }

    private _username: string;
    private _password: string;
    private _endpoint: string;


    constructor(parameters: { username: string, password: string, endpoint: string }) {

        this._username = parameters.username;
        this._password = parameters.password;
        this._endpoint = parameters.endpoint;

    }

}