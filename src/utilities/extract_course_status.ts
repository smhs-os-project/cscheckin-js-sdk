import { CheckinState } from "../types/common/checkin_state";
import type { CourseResponse } from "../types/course/resp_course";
import { isBefore } from "./is_after";

/**
 * Determine the current checkin ability state from the course response
 *
 * @param course The course to be determined.
 * @constructor
 */
export default function ExtractCourseState(
  course: CourseResponse
): CheckinState {
  // (start_timestamp + expire_time) < Date.now()
  if (isBefore(course.start_timestamp, course.expire_time))
    return CheckinState.NOT_CHECKED_IN;

  // (start_timestamp + late_time) < Date.now()
  if (isBefore(course.start_timestamp, course.late_time))
    return CheckinState.LATE;

  return CheckinState.ON_TIME;
}
