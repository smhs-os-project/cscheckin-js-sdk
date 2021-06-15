"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_method_1 = __importDefault(require("../../request/encapsulation/post_method"));
const resp_auth_token_1 = require("../../types/auth/resp_auth_token");
/**
 * Get the access token.
 *
 * @organization The organization issuing the id_token and access_token
 */
async function GetAccessToken(organization, request) {
    return post_method_1.default(`/auth/token/${organization}`, request, resp_auth_token_1.AuthTokenResponseSchema);
}
exports.default = GetAccessToken;
//# sourceMappingURL=get_access_token.js.map