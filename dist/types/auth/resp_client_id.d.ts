import type { Infer } from "myzod";
/**
 * The schema of the response of `GetClientId()`.
 */
export declare const OrgInfoResponseSchema: import("myzod").ObjectType<{
    /**
     * The client ID of this organization.
     */
    client_id: import("myzod").StringType;
    /**
     * The chinese name of this organization.
     */
    chinese_name: import("myzod").StringType;
}>;
/**
 * The response of `GetClientId()`.
 */
export declare type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
//# sourceMappingURL=resp_client_id.d.ts.map