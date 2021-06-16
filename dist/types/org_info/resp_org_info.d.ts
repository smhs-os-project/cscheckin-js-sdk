import { Infer } from "myzod";
import { Organization } from "../auth/req_auth_token";
export declare const OrgInfoResponseSchema: import("myzod/libs/types").ObjectType<{
    client_id: import("myzod/libs/types").StringType;
    chinese_name: import("myzod/libs/types").StringType;
}>;
export declare const OrgInfoListResponseSchema: import("myzod/libs/types").ArrayType<import("myzod/libs/types").ObjectType<{
    client_id: import("myzod/libs/types").StringType;
    chinese_name: import("myzod/libs/types").StringType;
    id: import("myzod/libs/types").EnumType<typeof Organization>;
}>>;
export declare type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
export declare type OrgInfoListResponse = Infer<typeof OrgInfoListResponseSchema>;
//# sourceMappingURL=resp_org_info.d.ts.map