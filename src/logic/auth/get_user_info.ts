import type CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { AuthUserResponseSchema } from "../../types/auth/resp_auth_user";

/**
 * Get the owner info by @param auth.
 */
export default async function GetUserInfo(auth: CSCAuth) {
  return GetAuthMethod("/auth/user", auth, AuthUserResponseSchema);
}
