import type { Infer } from "myzod";
import myzod from "myzod";
import { timeOffsetPattern } from "../../utilities";

/**
 * The schema of the course.
 */
export const CourseResponseSchema = myzod.object({
  /**
   * The unique course ID recorded in the backend database.
   */
  id: myzod.number(),
  /**
   * The ID of the Google Classroom which the course located in.
   */
  google_classroom_id: myzod.string(),
  /**
   * The name of this course.
   */
  name: myzod.string(),
  /**
   * The teacher ID of this course.
   */
  teacher_id: myzod.number(),
  /**
   * When did/will this course start?
   */
  start_timestamp: myzod.date(),
  /**
   * How long will this course be late?
   *
   * @see CreateCourseRequestSchema
   */
  late_time: myzod.string().pattern(timeOffsetPattern),
  /**
   * How long will this course be closed?
   *
   * @see CreateCourseRequestSchema
   */
  expire_time: myzod.string().pattern(timeOffsetPattern),
  /**
   * The UUID of this course.
   */
  uuid: myzod.string(),
  /**
   * When did the entry of this course create?
   */
  created_at: myzod.string(),
  /**
   * When did the entry of this course update?
   */
  updated_at: myzod.string(),
});
/**
 * The schema of the courses list.
 */
export const CourseListResponseSchema = myzod.array(CourseResponseSchema);

/**
 * The course.
 */
export type CourseResponse = Infer<typeof CourseResponseSchema>;
/**
 * The courses list.
 */
export type CourseListResponse = Infer<typeof CourseListResponseSchema>;
