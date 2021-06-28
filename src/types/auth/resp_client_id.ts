import type { Infer } from "myzod";
import myzod from "myzod";

export const OrgInfoResponseSchema = myzod.object({
  client_id: myzod.string(),
  chinese_name: myzod.string(),
});

export type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
