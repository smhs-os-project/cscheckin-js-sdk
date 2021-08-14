"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GClassroomListResponseSchema = exports.GClassroomResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
/**
 * The schema of entries in the response of `GetClassroomsList()`.
 */
exports.GClassroomResponseSchema = myzod_1.default.object({
    /**
     * The ID of this Classroom.
     */
    google_classroom_id: myzod_1.default.string(),
    /**
     * The name of this Classroom.
     */
    name: myzod_1.default.string(),
});
/**
 * The schema of the response of `GetClassroomsList()`.
 */
exports.GClassroomListResponseSchema = myzod_1.default.array(exports.GClassroomResponseSchema);
//# sourceMappingURL=resp_gclassroom.js.map