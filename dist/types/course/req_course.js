"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseRequestSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const utilities_1 = require("../../utilities");
/**
 * The schema of the request of `CreateCourse()`.
 */
exports.CreateCourseRequestSchema = myzod_1.default.object({
    /**
     * When does the course start?
     *
     * Should be a `Date()` object.
     */
    start_timestamp: myzod_1.default.date(),
    /**
     * How long will the course be late?
     *
     * Set students checking in after "hh:mm:ss" to "late".
     */
    late_time: myzod_1.default.string().pattern(utilities_1.timeOffsetPattern),
    /**
     * How long will the course be closed / expired?
     *
     * Expire the course after "hh:mm:ss".
     */
    expire_time: myzod_1.default.string().pattern(utilities_1.timeOffsetPattern),
});
//# sourceMappingURL=req_course.js.map