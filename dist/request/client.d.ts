import type { AnyType } from "myzod/libs/types";
import type { Infer } from "myzod";
import type { StandardErrorResponse } from "../types";
import type CSCAuth from "../auth";
/**
 * A standard response from the client.
 *
 * The first parameter is the data, the second
 * parameter is the error and the third parameter
 * is the extra information. You can check if the response
 * is success by checking `response[0] !== null`.
 */
export declare type ParsedResponse<Data, Error, Extra = unknown> = [
    Data | null,
    Error | null,
    Extra | null
];
export default class Client {
    private backendURI;
    private static instance;
    static getInstance(): Client;
    get BackendURI(): string;
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
    jsonFetcher(method: string, init: RequestInit): Promise<ParsedResponse<unknown, Error, {
        statusCode: number;
    }>>;
    /**
     * The text fetcher.
     * @see Client.baseFetcher
     */
    textFetcher(method: string, init: RequestInit): Promise<ParsedResponse<string, Error, {
        statusCode: number;
    }>>;
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
     * @return [Type-casted Response, Error]
     */
    static responseParser<T extends AnyType>(response: unknown, schema: T): ParsedResponse<Infer<T>, StandardErrorResponse, null>;
    static isResponseOk(statusCode: number, error: unknown): ParsedResponse<boolean, Error, {
        statusCode: number;
    } | null>;
    static exceptionToParseResponse<D, E, EX>(func: () => Promise<ParsedResponse<D, E, EX>>): Promise<ParsedResponse<D, E | Error, EX>>;
}
/**
 * The singleton client instance.
 */
export declare const clientInstance: Client;
//# sourceMappingURL=client.d.ts.map