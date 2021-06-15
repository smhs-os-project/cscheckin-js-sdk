"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCheckinResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const checkin_state_1 = require("../common/checkin_state");
exports.StudentCheckinResponseSchema = myzod_1.default.object({
    course_id: myzod_1.default.number(),
    student_id: myzod_1.default.string(),
    state: myzod_1.default.enum(checkin_state_1.CheckinState),
    updated_at: myzod_1.default.date(),
    created_at: myzod_1.default.date(),
    id: myzod_1.default.number(),
});
//# sourceMappingURL=resp_checkin.js.map