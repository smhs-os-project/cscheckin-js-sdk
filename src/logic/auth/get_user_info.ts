import type CSCAuth from "../../auth";
import type { AuthUserResponse } from "../../types";
import { AuthUserResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the info of the credential owner.
 */
export default async function GetUserInfo(
  auth: CSCAuth
): Promise<AuthUserResponse> {
  const { data } = await clientInstance.jsonFetcher(
    `/auth/user`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, AuthUserResponseSchema);
}
