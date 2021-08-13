import type { Infer } from "myzod";
import myzod from "myzod";

export const StandardErrorResponseSchema = myzod.object({
  /**
   * User Error
   */
  error: myzod.string().optional(),
  /**
   * Server Error
   */
  message: myzod.string().optional(),
});

export type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
