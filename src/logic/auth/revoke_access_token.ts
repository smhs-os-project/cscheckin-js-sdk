import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Revoke the credential.
 */
export default async function RevokeAccessToken(
  auth: CSCAuth
): Promise<boolean> {
  const { statusCode } = await clientInstance.textFetcher(
    `/auth/token`,
    await Client.authRequest(auth, {
      method: "DELETE",
    })
  );

  return Client.isResponseOk(statusCode ?? -1);
}
