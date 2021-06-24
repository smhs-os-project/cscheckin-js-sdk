import { CheckinState } from "../types/common/checkin_state";
import type { CourseResponse } from "../types/course/resp_course";
import { isBefore } from "./is_after";

export default function ExtractCheckinState(
  course: CourseResponse
): CheckinState {
  if (isBefore(course.start_timestamp, course.expire_time)) {
    return CheckinState.NOT_CHECKED_IN;
  }
  if (isBefore(course.start_timestamp, course.late_time)) {
    return CheckinState.LATE;
  }

  return CheckinState.ON_TIME;
}
