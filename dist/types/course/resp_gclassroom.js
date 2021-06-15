"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GClassroomListResponseSchema = exports.GClassroomResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
exports.GClassroomResponseSchema = myzod_1.default.object({
    google_classroom_id: myzod_1.default.string(),
    name: myzod_1.default.string(),
});
exports.GClassroomListResponseSchema = myzod_1.default.array(exports.GClassroomResponseSchema);
//# sourceMappingURL=resp_gclassroom.js.map