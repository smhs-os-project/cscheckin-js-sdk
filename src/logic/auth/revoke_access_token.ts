import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Revoke the access token
 *
 * @return Is it success?
 */
export default async function RevokeAccessToken(auth: CSCAuth) {
  const { statusCode } = await clientInstance.textFetcher(
    `/auth/token`,
    await Client.authRequest(auth, {
      method: "DELETE",
    })
  );

  return Client.isResponseOk(statusCode ?? -1);
}
