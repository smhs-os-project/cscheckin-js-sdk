import myzod, {Infer} from "myzod";
import { CheckinState } from "../common/checkin_state";

export const StudentCheckinResponseSchema = myzod.object({
    course_id: myzod.number(),
    student_id: myzod.string(),
    state: myzod.enum(CheckinState),
    updated_at: myzod.date(),
    created_at: myzod.date(),
    id: myzod.number(),
});

export type StudentCheckinResponse = Infer<typeof StudentCheckinResponseSchema>;
