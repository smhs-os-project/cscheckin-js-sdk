"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCheckinListResponseSchema = exports.TeacherCheckinResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const checkin_state_1 = require("../common/checkin_state");
exports.TeacherCheckinResponseSchema = myzod_1.default.object({
    checkin_id: myzod_1.default.string(),
    state: myzod_1.default.enum(checkin_state_1.CheckinState),
    created_at: myzod_1.default.date().or(myzod_1.default.string()),
    name: myzod_1.default.string(),
    class: myzod_1.default.string(),
    number: myzod_1.default.string(),
});
exports.TeacherCheckinListResponseSchema = myzod_1.default.array(exports.TeacherCheckinResponseSchema);
//# sourceMappingURL=resp_checkin_list.js.map