import type CSCAuth from "../../auth";
import { AuthUserResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the owner info by @param auth.
 */
export default async function GetUserInfo(auth: CSCAuth) {
  const { data } = await clientInstance.jsonFetcher(
    `/auth/user`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, AuthUserResponseSchema);
}
