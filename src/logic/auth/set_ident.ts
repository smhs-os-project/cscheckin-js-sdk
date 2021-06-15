import CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import PostJsonAuth from "../../request/json/post_auth";
import { AuthIdentRequest } from "../../types/auth/req_auth_ident";

/**
 * Set the identity of @param auth.
 * 
 * @returns Is it success?
 */
export default async function SetIdentity(request: AuthIdentRequest, auth: CSCAuth): Promise<boolean> {
    const response = await PostJsonAuth(BuildUri("/auth/user"), request, auth);

    return response?.ok ?? false;
}
