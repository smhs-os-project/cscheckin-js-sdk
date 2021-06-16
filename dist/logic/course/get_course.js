"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_method_1 = __importDefault(require("../../request/encapsulation/get_method"));
const resp_course_1 = require("../../types/course/resp_course");
/**
 * Get the info of specified course.
 */
async function GetCourse(courseUUID) {
    return get_method_1.default(`/course/${courseUUID}`, resp_course_1.CourseResponseSchema);
}
exports.default = GetCourse;
//# sourceMappingURL=get_course.js.map