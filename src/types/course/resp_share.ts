import type { Infer } from "myzod";
import myzod from "myzod";

/**
 * The schema of the response of `ShareToClassroom()` or `GetShareLink()`.
 */
export const ShareResponseSchema = myzod.object({
  /**
   * The link for checking in this course.
   */
  link: myzod.string(),
});

/**
 * The response of `ShareToClassroom()` or `GetShareLink()`.
 */
export type ShareResponse = Infer<typeof ShareResponseSchema>;
