import type { AuthTokenRequest, AuthTokenResponse } from "../../types";
import { AuthTokenResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the access token.
 *
 * @param request The Google token ID & access token
 */
export default async function GetAccessToken(
  request: AuthTokenRequest
): Promise<AuthTokenResponse> {
  const organization = "common"; // TODO: should be fixed when the backend dropped the organization support.
  const { data } = await clientInstance.jsonFetcher(
    `/auth/token/${organization}`,
    Client.postJsonRequest(request)
  );

  return Client.responseParser(data, AuthTokenResponseSchema);
}
