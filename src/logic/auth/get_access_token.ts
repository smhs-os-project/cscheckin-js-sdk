// import BuildUri from "../../request/build_uri";
import { AuthTokenRequest } from "../../types/auth/req_auth_token";
import { AuthTokenResponse } from "../../types/auth/resp_auth_token";
import { WouldFail } from "../../types/error/std_error";

/**
 * Get the access token.
 */
export default async function GetAccessToken(request: AuthTokenRequest): Promise<WouldFail<AuthTokenResponse>> {
    throw new Error("not implemented");
}
