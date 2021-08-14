"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInstance = void 0;
const myzod_1 = require("myzod");
const types_1 = require("../types");
const failed_to_get_credential_1 = __importDefault(require("../types/error/failed_to_get_credential"));
const api_error_1 = __importDefault(require("../types/error/api_error"));
/**
 * The client for requesting, with some API utilities.
 */
class Client {
    constructor() {
        /**
         * The backend API url to request.
         * @private
         */
        this.backendURI = "https://api.csc.deershark.com/api";
    }
    /**
     * Get the singleton instance of this client.
     */
    static getInstance() {
        if (!Client.instance) {
            Client.instance = new Client();
        }
        return Client.instance;
    }
    /**
     * Get the backend API endpoint.
     *
     * @constructor
     */
    get BackendURI() {
        return this.backendURI;
    }
    /**
     * Set the backend API endpoint.
     *
     * @constructor
     */
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
    baseFetcher(method, _a = { headers: {} }) {
        var { headers } = _a, init = __rest(_a, ["headers"]);
        const toFetchUri = `${this.BackendURI}${method}`;
        return fetch(toFetchUri, Object.assign(Object.assign({}, init), { headers: Object.assign(Object.assign({}, headers), { "User-Agent": "cscheckin-sdk-std/2.0" }) }));
    }
    /**
     * The JSON fetcher.
     * @see Client.baseFetcher
     */
    jsonFetcher(method, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.baseFetcher(method, init);
            return {
                data: yield resp.json(),
                statusCode: resp.status,
            };
        });
    }
    /**
     * The text fetcher.
     * @see Client.baseFetcher
     */
    textFetcher(method, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.baseFetcher(method, init);
            return {
                data: yield resp.text(),
                statusCode: resp.status,
            };
        });
    }
    /**
     * Create the header for an authenticated request.
     *
     * @param auth -> CSCAuth
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static authRequest(auth, _a = { headers: {} }) {
        var { headers } = _a, init = __rest(_a, ["headers"]);
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationHeader = yield auth.getAuthenticationHeader();
            if (!authenticationHeader)
                throw new failed_to_get_credential_1.default();
            return Object.assign(Object.assign({}, init), { headers: Object.assign(Object.assign({}, headers), { Authorization: authenticationHeader }) });
        });
    }
    /**
     * Create the header for an POST (application/json) request.
     *
     * @param data The request object. We will serialize this
     * data with `JSON.stringify()`.
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static postJsonRequest(data, _a = { headers: {} }) {
        var { headers } = _a, init = __rest(_a, ["headers"]);
        return Object.assign(Object.assign({}, init), { body: JSON.stringify(data), method: "POST", headers: Object.assign(Object.assign({}, headers), { "Content-Type": "application/json" }) });
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
            const parsedError = types_1.StandardErrorResponseSchema.try(response);
            if (parsedError instanceof myzod_1.ValidationError)
                throw parsedError;
            else if (parsedError.message)
                throw new api_error_1.default(parsedError.message);
            else if (parsedError.error)
                throw new api_error_1.default(parsedError.error);
            else
                throw parsedResponse;
        }
        return parsedResponse;
    }
    /**
     * This method emulated what `response.ok` does.
     * @param statusCode
     */
    static isResponseOk(statusCode) {
        // The ok read-only property of the Response interface contains
        // a Boolean stating whether the response was successful
        // (status in the range 200-299) or not.
        //
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
        return statusCode >= 200 && statusCode <= 299;
    }
}
exports.default = Client;
Client.instance = null;
/**
 * The singleton client instance.
 */
exports.clientInstance = Client.getInstance();
//# sourceMappingURL=client.js.map