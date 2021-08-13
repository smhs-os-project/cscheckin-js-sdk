import type CSCAuth from "../../auth";
import type { AuthIdentRequest } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Set the student identity information for the credential holder.
 */
export default async function SetIdentity(
  request: AuthIdentRequest,
  auth: CSCAuth
): Promise<boolean> {
  const { statusCode } = await clientInstance.textFetcher(
    "/auth/student",
    Client.postJsonRequest(request, await Client.authRequest(auth))
  );

  return Client.isResponseOk(statusCode ?? -1);
}
