"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const resp_auth_user_1 = require("./resp_auth_user");
/**
 * The schema of the response of `GetAccessToken()`.
 */
exports.AuthTokenResponseSchema = myzod_1.default.object({
    /**
     * The access token for accessing most of the CSCheckin services.
     */
    access_token: myzod_1.default.string(),
    /**
     * The token type.
     */
    token_type: myzod_1.default.string(),
    /**
     * When does this token expire?
     *
     * `exp` is a UNIX timestamp.
     */
    exp: myzod_1.default.number(),
    /**
     * The user information.
     *
     * @see AuthUserResponseSchema
     */
    user: resp_auth_user_1.AuthUserResponseSchema,
});
//# sourceMappingURL=resp_auth_token.js.map