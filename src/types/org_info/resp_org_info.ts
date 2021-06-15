import myzod, { Infer }  from "myzod";

export const OrgInfoResponseSchema = myzod.object({
    client_id: myzod.string(),
    chinese_name: myzod.string(),
});

export const OrgInfoListResponseSchema = myzod.array(OrgInfoResponseSchema);

export type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
export type OrgInfoListResponse = Infer<typeof OrgInfoListResponseSchema>;
