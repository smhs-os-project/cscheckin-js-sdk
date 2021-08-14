import type { Infer } from "myzod";
import myzod from "myzod";
import { CheckinState } from "../common/checkin_state";

/**
 * The schema of the checkin information of this student.
 */
export const StudentCheckinInfoResponseSchema = myzod.object({
  /**
   * The record ID of this checkin.
   */
  checkin_id: myzod.number(),
  /**
   * The checkin state of this student.
   *
   * @see CheckinState
   */
  state: myzod.enum(CheckinState),
  /**
   * When did this checkin record create.
   */
  created_at: myzod.date().or(myzod.string()),
  /**
   * The name of this student.
   */
  name: myzod.string(),
  /**
   * The class of this student.
   *
   * You should handle the case that this is an empty string.
   */
  class: myzod.string(),
  /**
   * The number of this student.
   *
   * You should handle the case that this is an empty string.
   */
  number: myzod.string(),
});
/**
 * The schema of the students list with their checkin information.
 */
export const TeacherCheckinListResponseSchema = myzod.array(
  StudentCheckinInfoResponseSchema
);

/**
 * The checkin information of this student.
 */
export type StudentCheckinInfoResponse = Infer<
  typeof StudentCheckinInfoResponseSchema
>;
/**
 * The students list with their checkin information.
 */
export type TeacherCheckinListResponse = Infer<
  typeof TeacherCheckinListResponseSchema
>;
