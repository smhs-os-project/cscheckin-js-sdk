"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const req_auth_ident_1 = require("./req_auth_ident");
/**
 * The schema of the response of `GetUserInfo()`.
 */
exports.AuthUserResponseSchema = myzod_1.default.object({
    /**
     * The unique user ID recorded in the backend database.
     */
    id: myzod_1.default.number(),
    /**
     * The user ID recorded in the Google database.
     */
    google_user_id: myzod_1.default.string(),
    /**
     * The domain serving the user.
     *
     * @example `example.com`
     */
    domain: myzod_1.default.string(),
    /**
     * The name of this user.
     *
     * @example `Jesse Lin`
     */
    name: myzod_1.default.string(),
    /**
     * The email of this user.
     *
     * @example `example@example.com`
     */
    email: myzod_1.default.string(),
    /**
     * The avatar URL of this user.
     */
    photo: myzod_1.default.string(),
    /**
     * When did this user entry create.
     */
    created_at: myzod_1.default.string(),
    /**
     * When did this user entry update.
     */
    updated_at: myzod_1.default.string(),
    /**
     * The student information.
     *
     * @see AuthIdentRequestSchema
     */
    student: req_auth_ident_1.AuthIdentRequestSchema.optional(),
});
//# sourceMappingURL=resp_auth_user.js.map