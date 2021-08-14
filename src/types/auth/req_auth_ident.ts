import type { Infer } from "myzod";
import myzod from "myzod";

/**
 * The schema of the `SetIdentity()` request.
 */
export const AuthIdentRequestSchema = myzod.object({
  /**
   * The class of the credential holder.
   */
  class: myzod.string(),
  /**
   * The no. of the credential holder.
   */
  number: myzod.string(),
});

/**
 * The request of `SetIdentity()`
 */
export type AuthIdentRequest = Infer<typeof AuthIdentRequestSchema>;
