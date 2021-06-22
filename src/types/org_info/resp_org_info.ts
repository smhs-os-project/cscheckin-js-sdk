import type { Infer } from "myzod";
import myzod from "myzod";
import { Organization } from "../auth/req_auth_token";

export const OrgInfoResponseSchema = myzod.object({
  client_id: myzod.string(),
  chinese_name: myzod.string(),
});

export const OrgInfoListResponseSchema = myzod.array(
  OrgInfoResponseSchema.and(
    myzod.object({
      id: myzod.enum(Organization),
    })
  )
);

export type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
export type OrgInfoListResponse = Infer<typeof OrgInfoListResponseSchema>;
