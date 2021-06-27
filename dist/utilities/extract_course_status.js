"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkin_state_1 = require("../types/common/checkin_state");
const is_after_1 = require("./is_after");
function ExtractCheckinState(course) {
    if (is_after_1.isBefore(course.start_timestamp, course.expire_time)) {
        return checkin_state_1.CheckinState.NOT_CHECKED_IN;
    }
    if (is_after_1.isBefore(course.start_timestamp, course.late_time)) {
        return checkin_state_1.CheckinState.LATE;
    }
    return checkin_state_1.CheckinState.ON_TIME;
}
exports.default = ExtractCheckinState;
//# sourceMappingURL=extract_course_status.js.map