import type CSCAuth from "../../auth";
import type { AuthIdentRequest } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Set the identity of @param auth.
 *
 * @returns Is it success?
 */
export default async function SetIdentity(
  request: AuthIdentRequest,
  auth: CSCAuth
) {
  const [, error, extra] = await clientInstance.textFetcher(
    "/auth/student",
    Client.postJsonRequest(request, await Client.authRequest(auth))
  );

  return Client.isResponseOk(extra?.statusCode ?? -1, error);
}
