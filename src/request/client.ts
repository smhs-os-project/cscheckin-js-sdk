import type { AnyType } from "myzod/libs/types";
import type { Infer } from "myzod";
import { ValidationError } from "myzod";
import { StandardErrorResponseSchema } from "../types";
import exceptionHandler from "../utilities/error_handler";
import type CSCAuth from "../auth";
import SDKResponseException from "../types/error/sdk_response_exception";

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
  ): Promise<{ data: unknown; statusCode: number }> {
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
  async textFetcher(
    method: string,
    init: RequestInit
  ): Promise<{ data: unknown; statusCode: number }> {
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
  static async authRequest(
    auth: CSCAuth,
    { headers, ...init }: RequestInit = { headers: {} }
  ): Promise<RequestInit> {
    const authenticationHeader = await auth.getAuthenticationHeader();

    if (!authenticationHeader)
      throw new SDKResponseException(
        "Failed to create an authenticated request."
      );

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
   * @throws ValidationError
   * @return [Type-casted Response, Error]
   */
  static responseParser<T extends AnyType>(
    response: unknown,
    schema: T
  ): Infer<T> {
    const parsedResponse = schema.try(response);

    if (parsedResponse instanceof ValidationError) {
      const parsedError = StandardErrorResponseSchema.try(response);

      if (parsedError instanceof ValidationError) {
        exceptionHandler(parsedError);
        throw parsedError;
      }

      if (parsedError.message) {
        exceptionHandler(parsedError.message);
        throw new Error(parsedError.message);
      } else if (parsedError.error) {
        exceptionHandler(parsedError.error);
        throw new Error(parsedError.error);
      } else {
        exceptionHandler(parsedResponse);
        throw parsedResponse;
      }
    }

    return parsedResponse;
  }

  static isResponseOk(statusCode: number): boolean {
    return statusCode === 204;
  }
}

/**
 * The singleton client instance.
 */
export const clientInstance = Client.getInstance();
