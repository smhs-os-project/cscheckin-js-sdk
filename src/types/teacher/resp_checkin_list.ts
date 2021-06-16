import myzod, {Infer} from "myzod";
import { CheckinState } from "../common/checkin_state";

export const TeacherCheckinResponseSchema = myzod.object({
    checkin_id: myzod.number(),
    state: myzod.enum(CheckinState),
    created_at: myzod.date(),
    name: myzod.string(),
    class: myzod.number(),
    number: myzod.number(),
});

export const TeacherCheckinListResponseSchema = myzod.array(TeacherCheckinResponseSchema);

export type TeacherCheckinResponse = Infer<typeof TeacherCheckinResponseSchema>;
export type TeacherCheckinListResponse = Infer<typeof TeacherCheckinListResponseSchema>;
