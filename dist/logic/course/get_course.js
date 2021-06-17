"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourseByID = exports.GetCourseByUUID = void 0;
const get_method_1 = __importDefault(require("../../request/encapsulation/get_method"));
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_course_1 = require("../../types/course/resp_course");
/**
 * Get the info of the specified UUID of course.
 */
async function GetCourseByUUID(courseUUID) {
    return get_method_1.default(`/course/uuid/${courseUUID}`, resp_course_1.CourseResponseSchema);
}
exports.GetCourseByUUID = GetCourseByUUID;
/**
 * Get the info of the specified ID of course.
 */
async function GetCourseByID(courseId, auth) {
    return get_auth_method_1.default(`/course/id/${courseId}`, auth, resp_course_1.CourseResponseSchema);
}
exports.GetCourseByID = GetCourseByID;
//# sourceMappingURL=get_course.js.map