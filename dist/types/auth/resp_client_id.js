"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgInfoResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
/**
 * The schema of the response of `GetClientId()`.
 */
exports.OrgInfoResponseSchema = myzod_1.default.object({
    /**
     * The client ID of this organization.
     */
    client_id: myzod_1.default.string(),
    /**
     * The chinese name of this organization.
     */
    chinese_name: myzod_1.default.string(),
});
//# sourceMappingURL=resp_client_id.js.map