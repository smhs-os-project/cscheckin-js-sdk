import { WouldFail } from "../../types/error/std_error";
import { OrgInfoListResponse } from "../../types/org_info/resp_org_info";

/**
 * Get the organization list as well as
 * its Chinese name and client ID.
 */
 export default function GetOrganizationList(): WouldFail<OrgInfoListResponse> {
    throw new Error("not implemented");
}
