/**
 * The class and methods related to HTTP requests.
 *
 * @module
 */
import type { AnyType } from "myzod/libs/types";
import type { Infer } from "myzod";
import type CSCAuth from "../auth";
/**
 * The client for requesting, with some API utilities.
 */
export default class Client {
    /**
     * The backend API url to request.
     * @private
     */
    private backendURI;
    private static instance;
    /**
     * Get the singleton instance of this client.
     */
    static getInstance(): Client;
    /**
     * Get the backend API endpoint.
     *
     * @constructor
     */
    get BackendURI(): string;
    /**
     * Set the backend API endpoint.
     *
     * @constructor
     */
    set BackendURI(uri: string);
    /**
     * A basic fetcher for this SDK and Vercel SWR.
     *
     * @param method The method to call. For example, `/auth/user`.
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    baseFetcher(method: string, { headers, ...init }?: RequestInit): Promise<Response>;
    /**
     * The JSON fetcher.
     * @see Client.baseFetcher
     */
    jsonFetcher(method: string, init: RequestInit): Promise<{
        data: unknown;
        statusCode: number;
    }>;
    /**
     * The text fetcher.
     * @see Client.baseFetcher
     */
    textFetcher(method: string, init: RequestInit): Promise<{
        data: unknown;
        statusCode: number;
    }>;
    /**
     * Create the header for an authenticated request.
     *
     * @param auth -> CSCAuth
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static authRequest(auth: CSCAuth, { headers, ...init }?: RequestInit): Promise<RequestInit>;
    /**
     * Create the header for an POST (application/json) request.
     *
     * @param data The request object. We will serialize this
     * data with `JSON.stringify()`.
     * @param headers -> RequestInit
     * @param init -> RequestInit
     */
    static postJsonRequest(data: unknown, { headers, ...init }?: RequestInit): RequestInit;
    /**
     * Parse the response.
     *
     * @param response The response.
     * @param schema The response schema built with myzod.
     * @throws ValidationError
     * @return [Type-casted Response, Error]
     */
    static responseParser<T extends AnyType>(response: unknown, schema: T): Infer<T>;
    /**
     * This method emulated what `response.ok` does.
     * @param statusCode
     */
    static isResponseOk(statusCode: number): boolean;
}
/**
 * The singleton client instance.
 */
export declare const clientInstance: Client;
//# sourceMappingURL=client.d.ts.map