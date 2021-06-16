"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_auth_method_1 = __importDefault(require("../../request/encapsulation/post_auth_method"));
const resp_course_1 = require("../../types/course/resp_course");
/**
 * Create a course.
 *
 * @example
 * ```ts
 * CreateCourse("12345", {
 *   start_timestamp: new Date(),
 *   late_time: "00:10:00",
 *   expire_time: "00:50:00",
 * });
 * ```
 */
function CreateCourse(classroomId, request, auth) {
    return post_auth_method_1.default(`/course/${classroomId}`, request, auth, resp_course_1.CourseResponseSchema);
}
exports.default = CreateCourse;
//# sourceMappingURL=create_course.js.map