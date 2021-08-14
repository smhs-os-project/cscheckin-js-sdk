"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinState = void 0;
/**
 * The current checkin state of students or the courses.
 */
var CheckinState;
(function (CheckinState) {
    /**
     * Students did not check in, or the course
     * has stopped accepting checkin request.
     */
    CheckinState["NOT_CHECKED_IN"] = "NOT_CHECKED_IN";
    /**
     * Students checked in on time, or the course
     * are accepting checkin request.
     */
    CheckinState["ON_TIME"] = "ON_TIME";
    /**
     * Students checked in late, or the course start
     * marking the ingoing checkin request as late.
     */
    CheckinState["LATE"] = "LATE";
})(CheckinState = exports.CheckinState || (exports.CheckinState = {}));
exports.default = {
    CheckinState,
};
//# sourceMappingURL=checkin_state.js.map