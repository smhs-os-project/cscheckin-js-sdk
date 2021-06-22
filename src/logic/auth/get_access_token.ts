import PostMethod from "../../request/encapsulation/post_method";
import type {
  AuthTokenRequest,
  Organization,
} from "../../types/auth/req_auth_token";
import { AuthTokenResponseSchema } from "../../types/auth/resp_auth_token";

/**
 * Get the access token.
 *
 * @organization The organization issuing the id_token and access_token
 */
export default async function GetAccessToken(
  organization: Organization,
  request: AuthTokenRequest
) {
  return PostMethod(
    `/auth/token/${organization}`,
    request,
    AuthTokenResponseSchema
  );
}
