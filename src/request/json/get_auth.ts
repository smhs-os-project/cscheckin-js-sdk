import CSCAuth from "../../auth";
import BaseGetJson from "./get_base";

export default async function GetJsonAuth(url: RequestInfo, auth: CSCAuth): Promise<Response | null> {
    const authentication = await auth.getAuthenticationHeader();

    if (authentication)
        return BaseGetJson(url, {
            headers: {
                "Authorization": authentication,
            },
        });
    
    return null;
}
