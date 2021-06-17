import myzod, {Infer} from "myzod";
import { CheckinState } from "../common/checkin_state";

export const TeacherCheckinResponseSchema = myzod.object({
    checkin_id: myzod.string(),
    state: myzod.enum(CheckinState),
    created_at: myzod.date().or(myzod.string()),
    name: myzod.string(),
    class: myzod.string(),
    number: myzod.string(),
});

export const TeacherCheckinListResponseSchema = myzod.array(TeacherCheckinResponseSchema);

export type TeacherCheckinResponse = Infer<typeof TeacherCheckinResponseSchema>;
export type TeacherCheckinListResponse = Infer<typeof TeacherCheckinListResponseSchema>;
