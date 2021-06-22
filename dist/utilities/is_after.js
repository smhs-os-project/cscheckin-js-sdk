"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBefore = exports.isAfter = exports.getAddedTime = exports.isTimePlus = exports.timePlusPattern = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
exports.timePlusPattern = /^\d\d:\d\d:\d\d$/;
function isTimePlus(time) {
    return !!exports.timePlusPattern.exec(time);
}
exports.isTimePlus = isTimePlus;
function getAddedTime(startTimestamp, timePlus) {
    if (isTimePlus(timePlus)) {
        const [hh, mm, ss] = timePlus.split(":").map(Number);
        if (hh !== undefined && mm !== undefined && ss !== undefined) {
            const lateTime = dayjs_1.default(startTimestamp)
                .add(hh, "hour")
                .add(mm, "minute")
                .add(ss, "second");
            return lateTime;
        }
    }
    throw new Error(`${timePlus} is in an invalid format.`);
}
exports.getAddedTime = getAddedTime;
function isAfter(startTimestamp, timePlus) {
    return getAddedTime(startTimestamp, timePlus).isAfter(Date.now());
}
exports.isAfter = isAfter;
function isBefore(startTimestamp, timePlus) {
    return getAddedTime(startTimestamp, timePlus).isBefore(Date.now());
}
exports.isBefore = isBefore;
//# sourceMappingURL=is_after.js.map