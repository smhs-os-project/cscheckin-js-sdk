import CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import DeleteJsonAuth from "../../request/json/delete_auth";

/**
 * Revoke the access token
 * 
 * @returns Is it success?
 */
export default async function RevokeAccessToken(auth: CSCAuth): Promise<boolean> {
    const response = await DeleteJsonAuth(BuildUri("/auth/token"), auth);

    return response?.ok ?? false;
}
