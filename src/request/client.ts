import type { AnyType } from "myzod/libs/types";
import type { Infer } from "myzod";
import { ValidationError } from "myzod";
import { StandardErrorResponseSchema } from "../types";
import type CSCAuth from "../auth";
import FailedToGetCredential from "../types/error/failed_to_get_credential";
import APIError from "../types/error/api_error";

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

    if (!authenticationHeader) throw new FailedToGetCredential();

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

      if (parsedError instanceof ValidationError) throw parsedError;
      else if (parsedError.message) throw new APIError(parsedError.message);
      else if (parsedError.error) throw new APIError(parsedError.error);
      else throw parsedResponse;
    }

    return parsedResponse;
  }

  /**
   * This method emulated what `response.ok` does.
   * @param statusCode
   */
  static isResponseOk(statusCode: number): boolean {
    // The ok read-only property of the Response interface contains
    // a Boolean stating whether the response was successful
    // (status in the range 200-299) or not.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
    return statusCode >= 200 && statusCode <= 299;
  }
}

/**
 * The singleton client instance.
 */
export const clientInstance = Client.getInstance();
