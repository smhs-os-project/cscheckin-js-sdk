import type { Infer } from "myzod";
import myzod from "myzod";
import { timePlusPattern } from "../../utilities/is_after";

export const CreateCourseRequestSchema = myzod.object({
  start_timestamp: myzod.date(),
  /**
   * Set students checking in after "hh:mm:ss" to "late".
   */
  late_time: myzod.string().pattern(timePlusPattern),
  /**
   * Expire the course after "hh:mm:ss"
   */
  expire_time: myzod.string().pattern(timePlusPattern),
});

export type CreateCourseRequest = Infer<typeof CreateCourseRequestSchema>;
