"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_auth_method_1 = __importDefault(require("../../request/encapsulation/post_auth_method"));
const resp_checkin_1 = require("../../types/student/resp_checkin");
async function Checkin(courseUUID, auth) {
    return post_auth_method_1.default(`/checkin/${courseUUID}`, {}, auth, resp_checkin_1.StudentCheckinResponseSchema);
}
exports.default = Checkin;
//# sourceMappingURL=checkin.js.map