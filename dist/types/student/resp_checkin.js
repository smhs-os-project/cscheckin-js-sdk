"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const checkin_state_1 = require("../common/checkin_state");
/**
 * The schema of the response of `Checkin()`
 */
exports.CheckinResponseSchema = myzod_1.default.object({
    /**
     * The course ID that checked in.
     */
    course_id: myzod_1.default.number(),
    /**
     * The ID of this checkin record.
     */
    id: myzod_1.default.number(),
    /**
     * The state of this checkin.
     *
     * @see CheckinState
     */
    state: myzod_1.default.enum(checkin_state_1.CheckinState),
    /**
     * The ID of the student who checked in.
     */
    student_id: myzod_1.default.number(),
    /**
     * When did this checkin record create.
     */
    created_at: myzod_1.default.date().or(myzod_1.default.string()),
    /**
     *  When did this checkin record update.
     */
    updated_at: myzod_1.default.date().or(myzod_1.default.string()),
});
//# sourceMappingURL=resp_checkin.js.map