"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseRequestSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const is_after_1 = require("../../utilities/is_after");
exports.CreateCourseRequestSchema = myzod_1.default.object({
    start_timestamp: myzod_1.default.date(),
    /**
     * Set students checking in after "hh:mm:ss" to "late".
     */
    late_time: myzod_1.default.string().pattern(is_after_1.timePlusPattern),
    /**
     * Expire the course after "hh:mm:ss"
     */
    expire_time: myzod_1.default.string().pattern(is_after_1.timePlusPattern),
});
//# sourceMappingURL=req_course.js.map