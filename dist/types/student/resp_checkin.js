"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const checkin_state_1 = require("../common/checkin_state");
exports.CheckinResponseSchema = myzod_1.default.object({
    course_id: myzod_1.default.number(),
    created_at: myzod_1.default.date().or(myzod_1.default.string()),
    id: myzod_1.default.number(),
    state: myzod_1.default.enum(checkin_state_1.CheckinState),
    student_id: myzod_1.default.number(),
    updated_at: myzod_1.default.date().or(myzod_1.default.string()),
});
//# sourceMappingURL=resp_checkin.js.map