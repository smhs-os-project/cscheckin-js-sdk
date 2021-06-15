import { WouldFail } from "../../types/error/std_error";
import { OrgInfoResponse } from "../../types/org_info/resp_org_info";

/**
 * Get the specified organization as well as
 * its Chinese name and client ID.
 * 
 * @param organization The organization to get its
 * Chinese name & client ID.
 */
 export default function GetOrganization(organization: string): WouldFail<OrgInfoResponse> {
    throw new Error("not implemented");
}
