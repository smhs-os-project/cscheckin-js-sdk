import myzod, { Infer } from "myzod";
import { timePlusPattern } from "../../utilities/is_after";

export const CreateCourseRequestSchema = myzod.object({
    start_timestamp: myzod.date(),
    late_time: myzod.string().pattern(timePlusPattern),
    expire_time: myzod.string().pattern(timePlusPattern),
});

export type CreateCourseRequest = Infer<typeof CreateCourseRequestSchema>;
