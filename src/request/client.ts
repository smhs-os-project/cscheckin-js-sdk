import type { AnyType } from "myzod/libs/types";
import type { Infer } from "myzod";
import { ValidationError } from "myzod";
import type { StandardErrorResponse } from "../types";
import { StandardErrorResponseSchema } from "../types";
import exceptionHandler from "../utilities/error_handler";
import type CSCAuth from "../auth";

/**
 * A standard response from the client.
 *
 * The first parameter is the data, the second
 * parameter is the error and the third parameter
 * is the extra information. You can check if the response
 * is success by checking `response[0] !== null`.
 */
export type ParsedResponse<Data, Error, Extra = unknown> = [
  Data | null,
  Error | null,
  Extra | null
];

export default class Client {
  private backendURI = "https://api.csc.deershark.com/api";

  private static instance: Client | null = null;

  public static getInstance(): Client {
    if (!Client.instance) {
      Client.instance = new Client();
    }

    return Client.instance;
  }

  public get BackendURI() {
    return this.backendURI;
  }

  public set BackendURI(uri: string) {
    this.backendURI = uri;
  }

  /**
   * A basic fetcher for this SDK and Vercel SWR.
   *
   * @param method The method to call. For example, `/auth/user`.
   * @param headers -> RequestInit
   * @param init -> RequestInit
   */
  baseFetcher(
    method: string,
    { headers, ...init }: RequestInit = { headers: {} }
  ): Promise<Response> {
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
  async jsonFetcher(
    method: string,
    init: RequestInit
  ): Promise<ParsedResponse<unknown, Error, { statusCode: number }>> {
    return Client.exceptionToParseResponse(async () => {
      const resp = await this.baseFetcher(method, init);
      const deserialized = await resp.json();

      return [
        deserialized,
        null,
        {
          statusCode: resp.status,
        },
      ];
    });
  }

  /**
   * The text fetcher.
   * @see Client.baseFetcher
   */
  async textFetcher(
    method: string,
    init: RequestInit
  ): Promise<ParsedResponse<string, Error, { statusCode: number }>> {
    return Client.exceptionToParseResponse(async () => {
      const resp = await this.baseFetcher(method, init);
      const deserialized = await resp.text();

      return [
        deserialized,
        null,
        {
          statusCode: resp.status,
        },
      ];
    });
  }

  /**
   * Create the header for an authenticated request.
   *
   * @param auth -> CSCAuth
   * @param headers -> RequestInit
   * @param init -> RequestInit
   */
  static async authRequest(
    auth: CSCAuth,
    { headers, ...init }: RequestInit = { headers: {} }
  ): Promise<RequestInit> {
    const authenticationHeader = await auth.getAuthenticationHeader();

    if (!authenticationHeader)
      throw new Error("Failed to create an authenticated request.");

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
  static postJsonRequest(
    data: unknown,
    { headers, ...init }: RequestInit = { headers: {} }
  ): RequestInit {
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
   * @return [Type-casted Response, Error]
   */
  static responseParser<T extends AnyType>(
    response: unknown,
    schema: T
  ): ParsedResponse<Infer<T>, StandardErrorResponse, null> {
    const parsedResponse = schema.try(response);

    if (parsedResponse instanceof ValidationError) {
      exceptionHandler(parsedResponse);
      const parsedError = StandardErrorResponseSchema.try(response);

      if (parsedError instanceof ValidationError) {
        exceptionHandler(parsedError);
        return [null, null, null];
      }

      return [null, parsedError, null];
    }

    return [parsedResponse, null, null];
  }

  static isResponseOk(
    statusCode: number,
    error: unknown
  ): ParsedResponse<boolean, Error, { statusCode: number } | null> {
    const success = statusCode === 204;

    if (error instanceof Error) {
      exceptionHandler(error);
      return [
        success,
        error,
        {
          statusCode,
        },
      ];
    }

    return [success, null, null];
  }

  static async exceptionToParseResponse<D, E, EX>(
    func: () => Promise<ParsedResponse<D, E, EX>>
  ): Promise<ParsedResponse<D, E | Error, EX>> {
    try {
      return await func();
    } catch (e) {
      exceptionHandler(e);
      if (e instanceof Error) return [null, e, null];
      return [null, new Error(e), null];
    }
  }
}

/**
 * The singleton client instance.
 */
export const clientInstance = Client.getInstance();
