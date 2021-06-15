"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_auth_method_1 = __importDefault(require("../../request/encapsulation/get_auth_method"));
const resp_auth_user_1 = require("../../types/auth/resp_auth_user");
/**
 * Get the owner info by @param auth.
 */
async function GetUserInfo(auth) {
    return get_auth_method_1.default("/auth/user", auth, resp_auth_user_1.AuthUserResponseSchema);
}
exports.default = GetUserInfo;
//# sourceMappingURL=get_user_info.js.map