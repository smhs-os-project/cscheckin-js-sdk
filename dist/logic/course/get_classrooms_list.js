"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_gclassroom_1 = require("../../types/course/resp_gclassroom");
/**
 * Get the available classrooms.
 */
async function GetClassroomsList(auth) {
    return get_auth_method_1.default("/course/google", auth, resp_gclassroom_1.GClassroomListResponseSchema);
}
exports.default = GetClassroomsList;
//# sourceMappingURL=get_classrooms_list.js.map