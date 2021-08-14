"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseListResponseSchema = exports.CourseResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const utilities_1 = require("../../utilities");
/**
 * The schema of the course.
 */
exports.CourseResponseSchema = myzod_1.default.object({
    /**
     * The unique course ID recorded in the backend database.
     */
    id: myzod_1.default.number(),
    /**
     * The ID of the Google Classroom which the course located in.
     */
    google_classroom_id: myzod_1.default.string(),
    /**
     * The name of this course.
     */
    name: myzod_1.default.string(),
    /**
     * The teacher ID of this course.
     */
    teacher_id: myzod_1.default.number(),
    /**
     * When did/will this course start?
     */
    start_timestamp: myzod_1.default.date(),
    /**
     * How long will this course be late?
     *
     * @see CreateCourseRequestSchema
     */
    late_time: myzod_1.default.string().pattern(utilities_1.timeOffsetPattern),
    /**
     * How long will this course be closed?
     *
     * @see CreateCourseRequestSchema
     */
    expire_time: myzod_1.default.string().pattern(utilities_1.timeOffsetPattern),
    /**
     * The UUID of this course.
     */
    uuid: myzod_1.default.string(),
    /**
     * When did the entry of this course create?
     */
    created_at: myzod_1.default.string(),
    /**
     * When did the entry of this course update?
     */
    updated_at: myzod_1.default.string(),
});
/**
 * The schema of the courses list.
 */
exports.CourseListResponseSchema = myzod_1.default.array(exports.CourseResponseSchema);
//# sourceMappingURL=resp_course.js.map