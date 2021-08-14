"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBefore = exports.isAfter = exports.getAddedTime = exports.isTimeOffset = exports.timeOffsetPattern = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const invalid_time_offset_1 = __importDefault(require("../types/error/invalid_time_offset"));
exports.timeOffsetPattern = /^\d\d:\d\d:\d\d$/;
/**
 * Is it the TimeOffset pattern.
 *
 * @example ```ts
 * isTimeOffset("00:10:00") // true
 * isTimeOffset("0:0:0") // false
 * isTimeOffset("1:13:15") // false
 * isTimeOffset("01:13:15") // true
 * ```
 */
function isTimeOffset(time) {
    return !!exports.timeOffsetPattern.exec(time);
}
exports.isTimeOffset = isTimeOffset;
/**
 * Get the Dayjs date object of (startTimestamp + TimePlus)
 *
 * @param startTimestamp The start time.
 * @param offset The offset to added.
 */
function getAddedTime(startTimestamp, offset) {
    if (isTimeOffset(offset)) {
        const [hh, mm, ss] = offset.split(":").map(Number);
        if (hh !== undefined && mm !== undefined && ss !== undefined) {
            return dayjs_1.default(startTimestamp)
                .add(hh, "hour")
                .add(mm, "minute")
                .add(ss, "second");
        }
    }
    throw new invalid_time_offset_1.default(offset);
}
exports.getAddedTime = getAddedTime;
/**
 * Is the specified time in the future?
 *
 * Formula: `(startTimestamp + timePlus) > Date.now()`
 *
 * @see getAddedTime
 */
function isAfter(startTimestamp, timePlus) {
    return getAddedTime(startTimestamp, timePlus).isAfter(Date.now());
}
exports.isAfter = isAfter;
/**
 * Is the specified time in the past?
 *
 * Formula: `(startTimestamp + timePlus) < Date.now()`
 *
 * @see getAddedTime
 */
function isBefore(startTimestamp, timePlus) {
    return getAddedTime(startTimestamp, timePlus).isBefore(Date.now());
}
exports.isBefore = isBefore;
//# sourceMappingURL=is_after.js.map