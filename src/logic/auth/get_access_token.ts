// import BuildUri from "../../request/build_uri";
import { ValidationError } from "myzod";
import BuildUri from "../../request/build_uri";
import PostJson from "../../request/json/post";
import { AuthTokenRequest } from "../../types/auth/req_auth_token";
import { AuthTokenResponse, AuthTokenResponseSchema } from "../../types/auth/resp_auth_token";
import { StdErrOrNull, WouldFail } from "../../types/error/std_error";

/**
 * Get the access token.
 */
export default async function GetAccessToken(organization: string, request: AuthTokenRequest): Promise<WouldFail<AuthTokenResponse>> {
    const rRes = await PostJson(BuildUri(`/auth/token/${organization}`), request);

    if (rRes.ok) {
        const response = await rRes.json();

        const successResp = AuthTokenResponseSchema.try(response);
        if (!(successResp instanceof ValidationError)) return successResp;

        return StdErrOrNull(response);
    }

    return null;
}
