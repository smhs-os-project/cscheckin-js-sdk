"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const req_auth_ident_1 = require("./req_auth_ident");
exports.AuthUserResponseSchema = myzod_1.default.object({
    id: myzod_1.default.number(),
    google_user_id: myzod_1.default.string(),
    domain: myzod_1.default.string(),
    name: myzod_1.default.string(),
    email: myzod_1.default.string(),
    photo: myzod_1.default.string(),
    created_at: myzod_1.default.string(),
    updated_at: myzod_1.default.string(),
    student: req_auth_ident_1.AuthIdentRequestSchema.optional(),
});
//# sourceMappingURL=resp_auth_user.js.map