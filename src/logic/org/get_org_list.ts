import { ValidationError } from "myzod";
import BuildUri from "../../request/build_uri";
import GetJson from "../../request/json/get";
import { StdErrOrNull, WouldFail } from "../../types/error/std_error";
import { OrgInfoListResponse, OrgInfoListResponseSchema } from "../../types/org_info/resp_org_info";

/**
 * Get the organization list as well as
 * its Chinese name and client ID.
 */
export default async function GetOrganizationList(): Promise<WouldFail<OrgInfoListResponse>> {
    const rRes = await GetJson(BuildUri(`/info`));

    if (rRes.ok) {
        const response = await rRes.json();

        const successResp = OrgInfoListResponseSchema.try(response);
        if (!(successResp instanceof ValidationError)) return successResp;

        return StdErrOrNull(response);
    }

    return null;
}
