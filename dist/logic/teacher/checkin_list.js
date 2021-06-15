"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_checkin_list_1 = require("../../types/teacher/resp_checkin_list");
async function CheckinList(courseId, auth) {
    return get_auth_method_1.default(`/checkin/${courseId}`, auth, resp_checkin_list_1.TeacherCheckinListResponseSchema);
}
exports.default = CheckinList;
//# sourceMappingURL=checkin_list.js.map