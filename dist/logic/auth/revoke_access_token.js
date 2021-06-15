"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../../request/build_uri"));
const delete_auth_1 = __importDefault(require("../../request/json/delete_auth"));
/**
 * Revoke the access token
 *
 * @returns Is it success?
 */
async function RevokeAccessToken(auth) {
    var _a;
    const response = await delete_auth_1.default(build_uri_1.default("/auth/token"), auth);
    return (_a = response === null || response === void 0 ? void 0 : response.ok) !== null && _a !== void 0 ? _a : false;
}
exports.default = RevokeAccessToken;
//# sourceMappingURL=revoke_access_token.js.map