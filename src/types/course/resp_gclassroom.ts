import type { Infer } from "myzod";
import myzod from "myzod";

/**
 * The schema of entries in the response of `GetClassroomsList()`.
 */
export const GClassroomResponseSchema = myzod.object({
  /**
   * The ID of this Classroom.
   */
  google_classroom_id: myzod.string(),
  /**
   * The name of this Classroom.
   */
  name: myzod.string(),
});

/**
 * The schema of the response of `GetClassroomsList()`.
 */
export const GClassroomListResponseSchema = myzod.array(
  GClassroomResponseSchema
);

/**
 * Entries in the response of `GetClassroomsList()`.
 */
export type GClassroomResponse = Infer<typeof GClassroomResponseSchema>;
/**
 * The response of `GetClassroomsList()`.
 */
export type GClassroomListResponse = Infer<typeof GClassroomListResponseSchema>;
