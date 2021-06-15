"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_auth_method_1 = __importDefault(require("../../request/encapsulation/post_auth_method"));
const resp_share_1 = require("../../types/course/resp_share");
/**
 * Share this course to Google Classroom.
 *
 * @returns the link sent
 */
async function ShareToClassroom(courseId, auth) {
    return post_auth_method_1.default(`/course/share/${courseId}/post`, {}, auth, resp_share_1.ShareResponseSchema);
}
exports.default = ShareToClassroom;
//# sourceMappingURL=share_to_classroom.js.map