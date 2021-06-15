import PostMethod from "../../request/encapsulation/post_method";
import { AuthTokenRequest } from "../../types/auth/req_auth_token";
import { AuthTokenResponseSchema } from "../../types/auth/resp_auth_token";

/**
 * Get the access token.
 */
export default async function GetAccessToken(organization: string, request: AuthTokenRequest) {
    return PostMethod(`/auth/token/${organization}`, request, AuthTokenResponseSchema);
}
