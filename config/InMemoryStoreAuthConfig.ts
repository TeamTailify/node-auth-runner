class InMemoryStoreAuthConfig {

    get endpoint(): string {
        return this._endpoint;
    }
    get port(): number {
        return this._port;
    }

    get cacheKey(): string {
        return this._cacheKey;
    }

    private _endpoint: string;
    private _port: number;
    private _cacheKey: string;

    constructor(parameters: { endpoint: string, port: number, cacheKey: string }) {

        this._endpoint = parameters.endpoint;
        this._port = parameters.port;
        this._cacheKey = parameters.cacheKey;

    }


}