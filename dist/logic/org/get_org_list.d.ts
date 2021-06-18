/**
 * Get the organization list as well as
 * its Chinese name and client ID.
 */
export default function GetOrganizationList(): Promise<import("../../types/error/std_error").WouldFail<{
    id: import("../../types").Organization;
    client_id: string;
    chinese_name: string;
}[]>>;
//# sourceMappingURL=get_org_list.d.ts.map