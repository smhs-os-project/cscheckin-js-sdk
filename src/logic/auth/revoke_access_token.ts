import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Revoke the access token
 *
 * @return Is it success?
 */
export default async function RevokeAccessToken(auth: CSCAuth) {
  const [, error, extra] = await clientInstance.textFetcher(
    `/auth/token`,
    await Client.authRequest(auth, {
      method: "DELETE",
    })
  );

  return Client.isResponseOk(extra?.statusCode ?? -1, error);
}
