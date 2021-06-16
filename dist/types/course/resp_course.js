"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseListResponseSchema = exports.CourseResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const is_after_1 = require("../../utilities/is_after");
exports.CourseResponseSchema = myzod_1.default.object({
    id: myzod_1.default.number(),
    google_classroom_id: myzod_1.default.string(),
    name: myzod_1.default.string(),
    teacher_id: myzod_1.default.number(),
    start_timestamp: myzod_1.default.date(),
    late_time: myzod_1.default.string().pattern(is_after_1.timePlusPattern),
    expire_time: myzod_1.default.string().pattern(is_after_1.timePlusPattern),
    uuid: myzod_1.default.string(),
    created_at: myzod_1.default.string(),
    updated_at: myzod_1.default.string(),
});
exports.CourseListResponseSchema = myzod_1.default.array(exports.CourseResponseSchema);
//# sourceMappingURL=resp_course.js.map