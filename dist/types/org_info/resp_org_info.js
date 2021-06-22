"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgInfoListResponseSchema = exports.OrgInfoResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
const req_auth_token_1 = require("../auth/req_auth_token");
exports.OrgInfoResponseSchema = myzod_1.default.object({
    client_id: myzod_1.default.string(),
    chinese_name: myzod_1.default.string(),
});
exports.OrgInfoListResponseSchema = myzod_1.default.array(exports.OrgInfoResponseSchema.and(myzod_1.default.object({
    id: myzod_1.default.enum(req_auth_token_1.Organization),
})));
//# sourceMappingURL=resp_org_info.js.map