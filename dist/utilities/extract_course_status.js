"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkin_state_1 = require("../types/common/checkin_state");
const is_after_1 = require("./is_after");
/**
 * Determine the current checkin ability state from the course response
 *
 * @param course The course to be determined.
 * @constructor
 */
function ExtractCourseState(course) {
    // (start_timestamp + expire_time) < Date.now()
    if (is_after_1.isBefore(course.start_timestamp, course.expire_time))
        return checkin_state_1.CheckinState.NOT_CHECKED_IN;
    // (start_timestamp + late_time) < Date.now()
    if (is_after_1.isBefore(course.start_timestamp, course.late_time))
        return checkin_state_1.CheckinState.LATE;
    return checkin_state_1.CheckinState.ON_TIME;
}
exports.default = ExtractCourseState;
//# sourceMappingURL=extract_course_status.js.map