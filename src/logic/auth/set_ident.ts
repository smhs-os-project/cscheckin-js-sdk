import CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import GetJsonAuth from "../../request/json/get_auth";

/**
 * Set the identity of @param auth.
 * 
 * @returns Is it success?
 */
export default async function SetIdentity(auth: CSCAuth): Promise<boolean> {
    const response = await GetJsonAuth(BuildUri("/auth/user"), auth);

    return response?.ok ?? false;
}
