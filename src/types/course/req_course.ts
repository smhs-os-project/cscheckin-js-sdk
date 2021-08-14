import type { Infer } from "myzod";
import myzod from "myzod";
import { timePlusPattern } from "../../utilities/is_after";

/**
 * The schema of the request of `CreateCourse()`.
 */
export const CreateCourseRequestSchema = myzod.object({
  /**
   * When does the course start?
   *
   * Should be a `Date()` object.
   */
  start_timestamp: myzod.date(),
  /**
   * How long will the course be late?
   *
   * Set students checking in after "hh:mm:ss" to "late".
   */
  late_time: myzod.string().pattern(timePlusPattern),
  /**
   * How long will the course be closed / expired?
   *
   * Expire the course after "hh:mm:ss".
   */
  expire_time: myzod.string().pattern(timePlusPattern),
});

/**
 * The request of `CreateCourse()`.
 */
export type CreateCourseRequest = Infer<typeof CreateCourseRequestSchema>;
