import GetMethod from "../../request/encapsulation/get_method";
import { OrgInfoListResponseSchema } from "../../types/org_info/resp_org_info";

/**
 * Get the organization list as well as
 * its Chinese name and client ID.
 */
export default async function GetOrganizationList() {
  return GetMethod("/info", OrgInfoListResponseSchema);
}
