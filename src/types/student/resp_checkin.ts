import type { Infer } from "myzod";
import myzod from "myzod";
import { CheckinState } from "../common/checkin_state";

export const CheckinResponseSchema = myzod.object({
  course_id: myzod.number(),
  created_at: myzod.date().or(myzod.string()),
  id: myzod.number(),
  state: myzod.enum(CheckinState),
  student_id: myzod.number(),
  updated_at: myzod.date().or(myzod.string()),
});

export type CheckinResponse = Infer<typeof CheckinResponseSchema>;
