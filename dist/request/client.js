"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInstance = void 0;
const myzod_1 = require("myzod");
const types_1 = require("../types");
const error_handler_1 = __importDefault(require("../utilities/error_handler"));
const sdk_response_exception_1 = __importDefault(require("../types/error/sdk_response_exception"));
class Client {
    constructor() {
        this.backendURI = "https://api.csc.deershark.com/api";
    }
    static getInstance() {
        if (!Client.instance) {
            Client.instance = new Client();
        }
        return Client.instance;
    }
    get BackendURI() {
        return this.backendURI;
    }
    set BackendURI(uri) {
        this.backendURI = uri;
    }
    /**
     * A basic fetcher for this SDK and Vercel SWR.
     *
     * @param method The method to call. For example, `/auth/user`.
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    baseFetcher(method, { headers, ...init } = { headers: {} }) {
        const toFetchUri = `${this.BackendURI}${method}`;
        return fetch(toFetchUri, {
            ...init,
            headers: {
                ...headers,
                "User-Agent": "cscheckin-sdk-std/2.0",
            },
        });
    }
    /**
     * The JSON fetcher.
     * @see Client.baseFetcher
     */
    async jsonFetcher(method, init) {
        const resp = await this.baseFetcher(method, init);
        return {
            data: await resp.json(),
            statusCode: resp.status,
        };
    }
    /**
     * The text fetcher.
     * @see Client.baseFetcher
     */
    async textFetcher(method, init) {
        const resp = await this.baseFetcher(method, init);
        return {
            data: await resp.text(),
            statusCode: resp.status,
        };
    }
    /**
     * Create the header for an authenticated request.
     *
     * @param auth -> CSCAuth
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static async authRequest(auth, { headers, ...init } = { headers: {} }) {
        const authenticationHeader = await auth.getAuthenticationHeader();
        if (!authenticationHeader)
            throw new sdk_response_exception_1.default("Failed to create an authenticated request.");
        return {
            ...init,
            headers: {
                ...headers,
                Authorization: authenticationHeader,
            },
        };
    }
    /**
     * Create the header for an POST (application/json) request.
     *
     * @param data The request object. We will serialize this
     * data with `JSON.stringify()`.
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static postJsonRequest(data, { headers, ...init } = { headers: {} }) {
        return {
            ...init,
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                ...headers,
                "Content-Type": "application/json",
            },
        };
    }
    /**
     * Parse the response.
     *
     * @param response The response.
     * @param schema The response schema built with myzod.
     * @throws ValidationError
     * @return [Type-casted Response, Error]
     */
    static responseParser(response, schema) {
        const parsedResponse = schema.try(response);
        if (parsedResponse instanceof myzod_1.ValidationError) {
            error_handler_1.default(parsedResponse);
            const parsedError = types_1.StandardErrorResponseSchema.try(response);
            if (parsedError instanceof myzod_1.ValidationError) {
                error_handler_1.default(parsedError);
                throw parsedError;
            }
            throw parsedResponse;
        }
        return parsedResponse;
    }
    static isResponseOk(statusCode) {
        return statusCode === 204;
    }
}
exports.default = Client;
Client.instance = null;
/**
 * The singleton client instance.
 */
exports.clientInstance = Client.getInstance();
//# sourceMappingURL=client.js.map