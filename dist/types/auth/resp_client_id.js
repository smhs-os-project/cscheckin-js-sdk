"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgInfoResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
exports.OrgInfoResponseSchema = myzod_1.default.object({
    client_id: myzod_1.default.string(),
    chinese_name: myzod_1.default.string(),
});
//# sourceMappingURL=resp_client_id.js.map