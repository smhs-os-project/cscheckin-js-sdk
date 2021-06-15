import { ValidationError } from "myzod";
import CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import GetJsonAuth from "../../request/json/get_auth";
import { AuthUserResponse, AuthUserResponseSchema } from "../../types/auth/resp_auth_user";
import { StdErrOrNull, WouldFail } from "../../types/error/std_error";

/**
 * Get the info of @param auth.
 */
export default async function GetUserInfo(auth: CSCAuth): Promise<WouldFail<AuthUserResponse>> {
    const rRes = await GetJsonAuth(BuildUri("/auth/user"), auth);

    if (rRes && rRes.ok) {
        const response = await rRes.json();

        const successResp = AuthUserResponseSchema.try(response);
        if (!(successResp instanceof ValidationError)) return successResp;

        return StdErrOrNull(response);
    }

    return null;
}
