import type { Infer } from "myzod";
import myzod from "myzod";

/**
 * The schema of the response of `GetClientId()`.
 */
export const OrgInfoResponseSchema = myzod.object({
  /**
   * The client ID of this organization.
   */
  client_id: myzod.string(),
  /**
   * The chinese name of this organization.
   */
  chinese_name: myzod.string(),
});

/**
 * The response of `GetClientId()`.
 */
export type OrgInfoResponse = Infer<typeof OrgInfoResponseSchema>;
