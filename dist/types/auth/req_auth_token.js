"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenRequestSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
/**
 * The schema of the request of `GetAccessToken()`.
 */
exports.AuthTokenRequestSchema = myzod_1.default.object({
    /**
     * The `id_token` received from Google.
     */
    id_token: myzod_1.default.string(),
    /**
     * The `access_token` received from Google.
     */
    access_token: myzod_1.default.string(),
});
//# sourceMappingURL=req_auth_token.js.map