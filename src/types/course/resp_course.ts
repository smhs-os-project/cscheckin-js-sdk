import myzod, { Infer } from "myzod";
import { timePlusPattern } from "../../utilities/is_after";

export const CourseResponseSchema = myzod.object({
    id: myzod.number(),
    google_classroom_id: myzod.string(),
    name: myzod.string(),
    teacher_id: myzod.number(),
    start_timestamp: myzod.date(),
    late_time: myzod.string().pattern(timePlusPattern),
    expire_time: myzod.string().pattern(timePlusPattern),
    uuid: myzod.string(),
    created_at: myzod.string(),
    updated_at: myzod.string(),
});
export const CourseListResponseSchema = myzod.array(CourseResponseSchema);

export type CourseResponse = Infer<typeof CourseResponseSchema>;
export type CourseListResponse = Infer<typeof CourseListResponseSchema>;
