"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_share_1 = require("../../types/course/resp_share");
/**
 * Get the share link.
 */
async function GetShareLink(courseId, auth) {
    return get_auth_method_1.default(`/course/share/${courseId}`, auth, resp_share_1.ShareResponseSchema);
}
exports.default = GetShareLink;
//# sourceMappingURL=get_share_link.js.map