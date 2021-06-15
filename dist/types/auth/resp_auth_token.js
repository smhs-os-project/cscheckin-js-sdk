"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const resp_auth_user_1 = require("./resp_auth_user");
exports.AuthTokenResponseSchema = myzod_1.default.object({
    access_token: myzod_1.default.string(),
    token_type: myzod_1.default.string(),
    /**
     * `exp` is an unix timestamp.
     */
    exp: myzod_1.default.number(),
    user: resp_auth_user_1.AuthUserResponseSchema,
});
//# sourceMappingURL=resp_auth_token.js.map