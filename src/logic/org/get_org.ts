import GetMethod from "../../request/encapsulation/get_method";
import type { WouldFail } from "../../types/error/std_error";
import type { OrgInfoResponse } from "../../types/org_info/resp_org_info";
import { OrgInfoResponseSchema } from "../../types/org_info/resp_org_info";

/**
 * Get the specified organization as well as
 * its Chinese name and client ID.
 *
 * @param organization The organization to get its
 * Chinese name & client ID.
 */
export default async function GetOrganization(
  organization: string
): Promise<WouldFail<OrgInfoResponse>> {
  return GetMethod(`/info/${organization}`, OrgInfoResponseSchema);
}
