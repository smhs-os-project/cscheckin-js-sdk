"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCheckinListResponseSchema = exports.StudentCheckinInfoResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const checkin_state_1 = require("../common/checkin_state");
/**
 * The schema of the checkin information of this student.
 */
exports.StudentCheckinInfoResponseSchema = myzod_1.default.object({
    /**
     * The record ID of this checkin.
     */
    checkin_id: myzod_1.default.number(),
    /**
     * The checkin state of this student.
     *
     * @see CheckinState
     */
    state: myzod_1.default.enum(checkin_state_1.CheckinState),
    /**
     * When did this checkin record create.
     */
    created_at: myzod_1.default.date().or(myzod_1.default.string()),
    /**
     * The name of this student.
     */
    name: myzod_1.default.string(),
    /**
     * The class of this student.
     *
     * You should handle the case that this is an empty string.
     */
    class: myzod_1.default.string(),
    /**
     * The number of this student.
     *
     * You should handle the case that this is an empty string.
     */
    number: myzod_1.default.string(),
});
/**
 * The schema of the students list with their checkin information.
 */
exports.TeacherCheckinListResponseSchema = myzod_1.default.array(exports.StudentCheckinInfoResponseSchema);
//# sourceMappingURL=resp_checkin_list.js.map