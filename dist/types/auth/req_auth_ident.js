"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthIdentRequestSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
/**
 * The schema of the `SetIdentity()` request.
 */
exports.AuthIdentRequestSchema = myzod_1.default.object({
    /**
     * The class of the credential holder.
     */
    class: myzod_1.default.string(),
    /**
     * The no. of the credential holder.
     */
    number: myzod_1.default.string(),
});
//# sourceMappingURL=req_auth_ident.js.map