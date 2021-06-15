"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_course_1 = require("../../types/course/resp_course");
/**
 * Get the available courses.
 */
function GetCoursesList(auth) {
    return get_auth_method_1.default(`/course`, auth, resp_course_1.CourseListResponseSchema);
}
exports.default = GetCoursesList;
//# sourceMappingURL=get_courses_list.js.map