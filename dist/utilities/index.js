"use strict";
/**
 * The utilities of this SDK.
 *
 * For example, you can determine the course state with
 * `ExtractCourseState()`.
 *
 * @module
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBefore = exports.isAfter = exports.getAddedTime = exports.isTimeOffset = exports.ExtractCourseState = exports.timeOffsetPattern = void 0;
const extract_course_status_1 = __importDefault(require("./extract_course_status"));
exports.ExtractCourseState = extract_course_status_1.default;
const is_after_1 = require("./is_after");
Object.defineProperty(exports, "getAddedTime", { enumerable: true, get: function () { return is_after_1.getAddedTime; } });
Object.defineProperty(exports, "isAfter", { enumerable: true, get: function () { return is_after_1.isAfter; } });
Object.defineProperty(exports, "isBefore", { enumerable: true, get: function () { return is_after_1.isBefore; } });
Object.defineProperty(exports, "isTimeOffset", { enumerable: true, get: function () { return is_after_1.isTimeOffset; } });
Object.defineProperty(exports, "timeOffsetPattern", { enumerable: true, get: function () { return is_after_1.timeOffsetPattern; } });
//# sourceMappingURL=index.js.map