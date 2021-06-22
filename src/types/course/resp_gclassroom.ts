import type { Infer } from "myzod";
import myzod from "myzod";

export const GClassroomResponseSchema = myzod.object({
  google_classroom_id: myzod.string(),
  name: myzod.string(),
});
export const GClassroomListResponseSchema = myzod.array(
  GClassroomResponseSchema
);

export type GClassroomResponse = Infer<typeof GClassroomResponseSchema>;
export type GClassroomListResponse = Infer<typeof GClassroomListResponseSchema>;
