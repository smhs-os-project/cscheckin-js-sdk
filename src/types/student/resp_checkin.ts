import type { Infer } from "myzod";
import myzod from "myzod";
import { CheckinState } from "../common/checkin_state";

/**
 * The schema of the response of `Checkin()`
 */
export const CheckinResponseSchema = myzod.object({
  /**
   * The course ID that checked in.
   */
  course_id: myzod.number(),
  /**
   * The ID of this checkin record.
   */
  id: myzod.number(),
  /**
   * The state of this checkin.
   *
   * @see CheckinState
   */
  state: myzod.enum(CheckinState),
  /**
   * The ID of the student who checked in.
   */
  student_id: myzod.number(),
  /**
   * When did this checkin record create.
   */
  created_at: myzod.date().or(myzod.string()),
  /**
   *  When did this checkin record update.
   */
  updated_at: myzod.date().or(myzod.string()),
});

/**
 * The response of `Checkin()`
 */
export type CheckinResponse = Infer<typeof CheckinResponseSchema>;
