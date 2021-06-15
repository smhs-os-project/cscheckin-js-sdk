import { ValidationError } from "myzod";
import BuildUri from "../../request/build_uri";
import GetJson from "../../request/json/get";
import { StdErrOrNull, WouldFail } from "../../types/error/std_error";
import { OrgInfoResponse, OrgInfoResponseSchema } from "../../types/org_info/resp_org_info";

/**
 * Get the specified organization as well as
 * its Chinese name and client ID.
 * 
 * @param organization The organization to get its
 * Chinese name & client ID.
 */
 export default async function GetOrganization(organization: string): Promise<WouldFail<OrgInfoResponse>> {
    const rRes = await GetJson(BuildUri(`/info/${organization}`));

    if (rRes.ok) {
        const response = await rRes.json();

        const successResp = OrgInfoResponseSchema.try(response);
        if (!(successResp instanceof ValidationError)) return successResp;

        return StdErrOrNull(response);
    }

    return null;
}
